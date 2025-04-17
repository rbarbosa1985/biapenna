import { AppError } from '@/errors/AppError'
import { UserRepository } from '@/repositories/user.repository'
import { Prisma } from 'generated/prisma'
import { PasswordCrypto } from './passwordCrypto.services'
import { JWTService } from './jwt.services'
import { prisma } from '@/util/prisma'
import dayjs from 'dayjs'
import { response } from 'express'

interface IToken {
  accessToken: string
  refreshToken: string
}

export class UserServices {
  private passwordCrypto: PasswordCrypto
  private jwtService: JWTService

  constructor(private userRepository: UserRepository) {
    // Initialize any properties or dependencies if needed
    this.passwordCrypto = new PasswordCrypto()
    this.jwtService = new JWTService()
  }

  async findAll() {
    const users = await this.userRepository.findAll()

    return { users }
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findUserByEmail(email)

    if (!user) {
      throw new AppError('Usuário não encontrado', 404)
    }

    return { user }
  }

  async getUserById(userId: string) {
    const user = await this.userRepository.findUserById(userId)

    if (!user) {
      throw new AppError('Usuário não encontrado', 404)
    }

    return { user }
  }

  async createUser(userData: Prisma.UserCreateInput) {
    const user = await this.userRepository.create(userData)

    return { user }
  }

  async updateUser(userId: string, userData: Prisma.UserCreateInput) {
    const existingUser = await this.userRepository.findUserById(userId)

    if (!existingUser) {
      throw new AppError('Usuário não encontrado', 404)
    }

    const user = await this.userRepository.update(userId, userData)

    return { user }
  }

  async deleteUser(userId: string) {
    const user = await this.userRepository.findUserById(userId)
    if (!user) {
      throw new AppError('Usuário não encontrado', 404)
    }

    await this.userRepository.delete(userId)

    return { message: `User with ID ${userId} deleted` }
  }

  async signIn(email: string, password: string): Promise<IToken> {
    const user = await this.userRepository.findUserByEmail(email)

    if (!user) {
      throw new AppError('Email ou senha são inválidos', 401)
    }

    const isPasswordValid = await this.passwordCrypto.verifyPassword(password, user.password)

    if (!isPasswordValid) {
      throw new AppError('Email ou senha são inválidos', 401)
    }

    const id = user.id

    if (!id) {
      throw new AppError('ID do usuário não encontrado', 404)
    }
    // Generate JWT token
    const accessToken = await this.jwtService.signIn({ id })
    const refreshToken = await this.jwtService.generateRefreshToken(id)

    if (!accessToken) {
      throw new AppError('Erro ao gerar token', 500)
    }
    // Return user data and token

    return { accessToken, refreshToken }
  }

  async generateRefreshToken(refresh_token: string): Promise<IToken> {
    const refreshToken = await prisma.refreshToken.findUnique({
      where: {
        refresh_token,
      },
    })

    if (!refreshToken) {
      throw new AppError('Refresh token não encontrado', 401)
    }

    const token = await this.jwtService.signIn({ id: refreshToken.userId })
    const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refreshToken.expires_in))

    if (refreshTokenExpired) {
      await prisma.refreshToken.delete({
        where: {
          id: refreshToken.id,
        },
      })

      const newRefreshToken = await this.jwtService.generateRefreshToken(refreshToken.userId)

      return {
        accessToken: token,
        refreshToken: newRefreshToken,
      }
    }

    return {
      accessToken: token,
      refreshToken: refresh_token,
    }
  }
}
