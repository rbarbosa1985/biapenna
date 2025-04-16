import { Router } from 'express'

//Controller
const PaintingController = require('@/controllers/painting.controller')
const paintingController = new PaintingController()
//Middleware
const EnsureAuthenticated = require('@/middlewares/ensureAuthenticated')
const ensureAuthenticated = new EnsureAuthenticated()
//Routes
const paintingRoutes = Router()

paintingRoutes.get('/', paintingController.findAll)
paintingRoutes.post('/', ensureAuthenticated, paintingController.createPainting)
paintingRoutes.get('/:id', paintingController.getPaintingById)
paintingRoutes.put('/:id', ensureAuthenticated, paintingController.updatePainting)
paintingRoutes.delete('/:id', ensureAuthenticated, paintingController.deletePainting)

module.exports = paintingRoutes
