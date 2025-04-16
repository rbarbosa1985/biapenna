import { Router } from 'express'

//Controller
const UserController = require('@/controllers/user.controller')
const userController = new UserController()
//Middleware
const EnsureAuthenticated = require('@/middlewares/ensureAuthenticated')
const ensureAuthenticated = new EnsureAuthenticated()
//Routes
const userRoutes = Router()

userRoutes.get('/', userController.findAll)
userRoutes.post('/', ensureAuthenticated, userController.createUser)
userRoutes.get('/:id', ensureAuthenticated, userController.getUserById)
userRoutes.put('/:id', ensureAuthenticated, userController.updateUser)
userRoutes.delete('/:id', ensureAuthenticated, userController.deleteUser)
userRoutes.get('/email/:email', ensureAuthenticated, userController.getUserByEmail)

module.exports = userRoutes
