import { Router } from 'express'

//Controller
const ReviewController = require('@/controllers/review.controller')
const reviewController = new ReviewController()
//Routes
const reviewRoutes = Router()

reviewRoutes.get('/', reviewController.findAll)
reviewRoutes.post('/', reviewController.createReview)
reviewRoutes.get('/:id', reviewController.getReviewById)
reviewRoutes.put('/:id', reviewController.updateReview)
reviewRoutes.delete('/:id', reviewController.deleteReview)

module.exports = reviewRoutes
