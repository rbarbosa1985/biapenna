import { Router } from 'express'

//Controller
const UserController = require('@/controllers/user.controller')
const userController = new UserController()
//Middleware
const ensureAuthenticated = require('@/middlewares/ensureAuthenticated')
//Routes
const userRoutes = Router()

userRoutes.get('/', userController.findAll)
userRoutes.post('/', userController.createUser)
userRoutes.get('/:id', ensureAuthenticated, userController.getUserById)
userRoutes.put('/:id', ensureAuthenticated, userController.updateUser)
userRoutes.delete('/:id', ensureAuthenticated, userController.deleteUser)
userRoutes.get('/email/:email', ensureAuthenticated, userController.getUserByEmail)

module.exports = userRoutes
