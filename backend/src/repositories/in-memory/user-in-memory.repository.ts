import { User } from '@/entities/user'
import { UserRepository } from '../user.repository'
import { randomUUID } from 'crypto'

export class InMemoryUserRepository implements UserRepository {
  public users: User[] = []

  findUserById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.')
  }
  findUserByEmail(email: string): Promise<User | null> {
    throw new Error('Method not implemented.')
  }
  update(user: User): Promise<User> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
  findAll(): Promise<User[]> {
    return Promise.resolve(this.users)
  }

  create(user: User): Promise<User> {
    const userExists = this.findByEmail(user.getEmail())

    if (userExists != null) {
      return Promise.reject(new Error('User already exists'))
    }

    const newUser = new User(
      randomUUID(),
      user.getName(),
      user.getEmail(),
      user.getPassword(),
    )

    this.users.push(newUser)
    return Promise.resolve(newUser)
  }
  findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => {
      user.getId() === id
    })

    if (!user) return Promise.resolve(null)

    return Promise.resolve(user)
  }
  findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => {
      user.getEmail() === email
    })

    if (!user) return Promise.resolve(null)

    return Promise.resolve(user)
  }
}
