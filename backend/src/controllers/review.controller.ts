import { makeReviewServices } from '@/services/factories/make-review-services'
import { Request, Response } from 'express'
const reviewService = makeReviewServices()
class ReviewController {
  constructor() {}

  async findAll(request: Request, response: Response) {
    const reviews = await reviewService.getAllReviews()
    return response.status(200).json(reviews)
  }

  async getReviewById(request: Request, response: Response) {
    const reviewId = request.params.id

    const { review } = await reviewService.getReviewById(reviewId)

    return response.status(200).json(review)
  }

  async createReview(request: Request, response: Response) {
    const reviewData = request.body

    const { review } = await reviewService.createReview(reviewData)

    return response.status(201).json(review)
  }

  async updateReview(request: Request, response: Response) {
    const reviewId = request.params.id
    const reviewData = request.body

    const { review } = await reviewService.updateReview(reviewId, reviewData)

    return response.status(200).json(review)
  }

  async deleteReview(request: Request, response: Response) {
    const reviewId = request.params.id

    await reviewService.deleteReview(reviewId)

    return response.status(204).send()
  }
}

module.exports = ReviewController
