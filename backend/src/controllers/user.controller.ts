import { makeUserServices } from '@/services/factories/make-user-services'
import { Request, Response } from 'express'
const userService = makeUserServices()
class UserController {
  constructor() {}

  async findAll(request: Request, response: Response) {
    const users = await userService.findAll()
    return response.status(200).json(users)
  }

  async getUserById(request: Request, response: Response) {
    const userId = request.params.id

    const { user } = await userService.getUserById(userId)

    return response.status(200).json(user)
  }

  async createUser(request: Request, response: Response) {
    const userData = request.body

    const { user } = await userService.createUser(userData)

    return response.status(201).json(user)
  }

  async updateUser(request: Request, response: Response) {
    const userId = request.params.id
    const userData = request.body

    const { user } = await userService.updateUser(userId, userData)

    return response.status(200).json(user)
  }

  async deleteUser(request: Request, response: Response) {
    const userId = request.params.id

    await userService.deleteUser(userId)

    return response.status(204).send()
  }

  async getUserByEmail(request: Request, response: Response) {
    const email = request.params.email

    const { user } = await userService.getUserByEmail(email)

    return response.status(200).json(user)
  }
}

module.exports = UserController
