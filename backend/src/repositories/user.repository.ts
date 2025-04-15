import type { Prisma } from 'generated/prisma'

export interface UserRepository {
  create(user: Prisma.UserCreateInput): Promise<Prisma.UserCreateInput>
  findUserById(id: string): Promise<Prisma.UserCreateInput | null>
  findUserByEmail(email: string): Promise<Prisma.UserCreateInput | null>
  update(
    id: string,
    user: Prisma.UserCreateInput,
  ): Promise<Prisma.UserCreateInput>
  delete(id: string): Promise<void>
  findAll(): Promise<Prisma.UserCreateInput[]>
}
