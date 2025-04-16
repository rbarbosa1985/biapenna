import { Router } from 'express'

//Controller
const ReviewController = require('@/controllers/review.controller')
const reviewController = new ReviewController()
//Middleware
const EnsureAuthenticated = require('@/middlewares/ensureAuthenticated')
const ensureAuthenticated = new EnsureAuthenticated()
//Routes
const reviewRoutes = Router()

reviewRoutes.get('/', reviewController.findAll)
reviewRoutes.post('/', ensureAuthenticated, reviewController.createReview)
reviewRoutes.get('/:id', ensureAuthenticated, reviewController.getReviewById)
reviewRoutes.put('/:id', ensureAuthenticated, reviewController.updateReview)
reviewRoutes.delete('/:id', ensureAuthenticated, reviewController.deleteReview)

module.exports = reviewRoutes
