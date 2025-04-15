import { User } from '@/entities/user'
import { ResourceNotFoundError } from '@/errors/resource-not-found.error'
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
      throw new ResourceNotFoundError()
    }

    return { user }
  }

  async getUserById(userId: string) {
    const user = await this.userRepository.findUserById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
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
      throw new ResourceNotFoundError()
    }

    const user = await this.userRepository.update(userData)

    return { user }
  }

  async deleteUser(userId: string) {
    const user = await this.userRepository.findUserById(userId)
    if (!user) {
      throw new ResourceNotFoundError()
    }

    await this.userRepository.delete(userId)

    return { message: `User with ID ${userId} deleted` }
  }
}
