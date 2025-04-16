import { AppError } from '@/errors/AppError'
import { UserRepository } from '@/repositories/user.repository'
import { Prisma } from 'generated/prisma'
import { PasswordCrypto } from './passwordCrypto.service'
import { JWTService } from './jwt.service'

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

  async signIn(email: string, password: string) {
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
    const accessToken = this.jwtService.signIn({ id })

    if (!accessToken) {
      throw new AppError('Erro ao gerar token', 500)
    }
    // Return user data and token

    return { accessToken }
  }
}
