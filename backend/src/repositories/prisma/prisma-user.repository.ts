import { prisma } from '@/util/prisma'
import { UserRepository } from '../user.repository'
import { Prisma } from 'generated/prisma'

export class PrismaUserRepository implements UserRepository {
  async create(user: Prisma.UserCreateInput): Promise<Prisma.UserCreateInput> {
    const newUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    })

    return newUser
  }

  async findUserById(id: string): Promise<Prisma.UserCreateInput | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  async findUserByEmail(email: string): Promise<Prisma.UserCreateInput | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  async update(
    id: string,
    user: Prisma.UserCreateInput,
  ): Promise<Prisma.UserCreateInput> {
    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
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

  async findAll(): Promise<Prisma.UserCreateInput[]> {
    const users = await prisma.user.findMany()
    return users
  }
}
