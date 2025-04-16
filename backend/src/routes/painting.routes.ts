import { Router } from 'express'

//Controller
const PaintingController = require('@/controllers/painting.controller')
const paintingController = new PaintingController()
//Routes
const paintingRoutes = Router()

paintingRoutes.get('/', paintingController.findAll)
paintingRoutes.post('/', paintingController.createPainting)
paintingRoutes.get('/:id', paintingController.getPaintingById)
paintingRoutes.put('/:id', paintingController.updatePainting)
paintingRoutes.delete('/:id', paintingController.deletePainting)

module.exports = paintingRoutes
