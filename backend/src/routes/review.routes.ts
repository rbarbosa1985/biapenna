import { Router } from 'express'

//Controller
const ReviewController = require('@/controllers/review.controller')
const reviewController = new ReviewController()
//Middleware
const ensureAuthenticated = require('@/middlewares/ensureAuthenticated')
//Routes
const reviewRoutes = Router()

reviewRoutes.get('/', ensureAuthenticated, reviewController.findAll)
reviewRoutes.post('/', ensureAuthenticated, reviewController.createReview)
reviewRoutes.get('/:id', ensureAuthenticated, reviewController.getReviewById)
reviewRoutes.put('/:id', ensureAuthenticated, reviewController.updateReview)
reviewRoutes.delete('/:id', ensureAuthenticated, reviewController.deleteReview)

module.exports = reviewRoutes
