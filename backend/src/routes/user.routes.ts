import { Router } from 'express'

//Controller
const UserController = require('@/controllers/user.controller')
const userController = new UserController()
//Routes
const userRoutes = Router()

userRoutes.get('/', userController.getUser)

module.exports = userRoutes
