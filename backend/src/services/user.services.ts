import { User } from '@/entities/user'
import { AppError } from '@/errors/AppError'
import { UserRepository } from '@/repositories/user.repository'

export class UserServices {
  constructor(private userRepository: UserRepository) {
    // Initialize any properties or dependencies if needed
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

  async createUser(userData: User) {
    const user = await this.userRepository.create(userData)

    return { user }
  }

  async updateUser(userId: string, userData: User) {
    const existingUser = await this.userRepository.findUserByEmail(
      userData.getEmail(),
    )

    if (!existingUser) {
      throw new AppError('Usuário não encontrado', 404)
    }

    const user = await this.userRepository.update(userData)

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
}
