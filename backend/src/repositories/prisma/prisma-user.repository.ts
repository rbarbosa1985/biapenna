import { prisma } from '@/util/prisma'
import type { UserRepository } from '../user.repository'
import type { User } from '@/entities/user'

export class PrismaUserRepository implements UserRepository {
  async create(user: User): Promise<User> {
    const newUser = await prisma.user.create({
      data: {
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
      },
    })

    return newUser
  }

  async findUserById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  async update(user: User): Promise<User> {
    const updatedUser = await prisma.user.update({
      where: {
        id: user.getId(),
      },
      data: {
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
      },
    })

    return updatedUser
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id,
      },
    })
  }

  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany()
    return users
  }
}
