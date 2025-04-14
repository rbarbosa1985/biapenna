import type { InMemoryUserRepository } from '@/repositories/in-memory/user-in-memory.repository'
import { UserServices } from '@/services/user.services'
import { Request, Response } from 'express'

class UserController {
  constructor(private userService: InMemoryUserRepository) {}

  // async getUserById(request: Request, response: Response) {
  //   const userId = request.params.id

  //   const { user } = await this.userService.getUserById(userId)

  //   return response.status(200).json(user)
  // }

  // async createUser(request: Request, response: Response) {
  //   const userData = request.body

  //   const { user } = await this.userService.createUser(userData)

  //   return response.status(201).json(user)
  // }

  // async updateUser(request: Request, response: Response) {
  //   const userId = request.params.id
  //   const userData = request.body

  //   const { user } = await this.userService.updateUser(userId, userData)

  //   return response.status(200).json(user)
  // }

  // async deleteUser(request: Request, response: Response) {
  //   const userId = request.params.id

  //   await this.userService.deleteUser(userId)

  //   return response.status(204).send()
  // }

  async getAllUsers(request: Request, response: Response) {
    const users = await this.userService.findAll()

    return response.status(200).json(users)
  }

  // async getUserByEmail(request: Request, response: Response) {
  //   const email = request.params.email

  //   const { user } = await this.userService.getUserByEmail(email)

  //   return response.status(200).json(user)
  // }
}

module.exports = UserController
