import { Router } from 'express'

//Controller
const ReviewController = require('@/controllers/review.controller')
const reviewController = new ReviewController()
//Routes
const reviewRoutes = Router()

reviewRoutes.get('/', reviewController.findAll)

module.exports = reviewRoutes
