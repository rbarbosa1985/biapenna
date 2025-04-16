import { compare, hash } from 'bcryptjs'

export class PasswordCrypto {
  async hashPassword(password: string): Promise<string> {
    return await hash(password, 10)
  }

  async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return await compare(password, hashedPassword)
  }
}
