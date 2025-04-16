import { PrismaUserRepository } from '@/repositories/prisma/prisma-user.repository'
import { UserServices } from '../user.services'

export function makeUserServices() {
  const userRepository = new PrismaUserRepository()
  const userServices = new UserServices(userRepository)
  return userServices
}
// This function creates an instance of UserServices with a PrismaUserRepository.
