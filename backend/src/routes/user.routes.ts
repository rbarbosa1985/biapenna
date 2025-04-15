import { Router } from 'express'

//Controller
const UserController = require('@/controllers/user.controller')
const userController = new UserController()
//Routes
const userRoutes = Router()

userRoutes.get('/', userController.findAll)
userRoutes.post('/', userController.createUser)
userRoutes.get('/:id', userController.getUserById)
userRoutes.put('/:id', userController.updateUser)
userRoutes.delete('/:id', userController.deleteUser)
userRoutes.get('/email/:email', userController.getUserByEmail)

module.exports = userRoutes
