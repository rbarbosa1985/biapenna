import { Router } from 'express'

//Controller
const PaintingController = require('@/controllers/painting.controller')
const paintingController = new PaintingController()
//Routes
const paintingRoutes = Router()

paintingRoutes.get('/', paintingController.findAll)

module.exports = paintingRoutes
