import type { User } from '@/entities/user'

export interface UserRepository {
  create(user: User): Promise<User>
  findUserById(id: string): Promise<User | null>
  findUserByEmail(email: string): Promise<User | null>
  update(user: User): Promise<User>
  delete(id: string): Promise<void>
  findAll(): Promise<User[]>
}
