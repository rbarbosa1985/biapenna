import { AppError } from '@/errors/AppError'
import { ReviewRepository } from '@/repositories/review.repository'
import type { Prisma } from 'generated/prisma'

export class ReviewServices {
  constructor(private reviewRepository: ReviewRepository) {
    // Initialize any properties or dependencies if needed
  }

  async getAllReviews() {
    const review = await this.reviewRepository.getAllReviews()
    return { review }
  }

  async getReviewById(reviewId: string) {
    const review = await this.reviewRepository.getReviewById(reviewId)

    if (!review) {
      throw new AppError('Avaliação não encontrado')
    }

    return { review }
  }

  async createReview(reviewData: Prisma.ReviewCreateInput) {
    const review = await this.reviewRepository.createReview(reviewData)

    return { review }
  }

  async updateReview(reviewId: string, reviewData: Prisma.ReviewCreateInput) {
    const existingReview = await this.reviewRepository.getReviewById(reviewId)

    if (!existingReview) {
      throw new AppError('Avaliação não encontrado')
    }

    const review = await this.reviewRepository.updateReview(
      reviewId,
      reviewData,
    )

    return { review }
  }

  async deleteReview(reviewId: string) {
    const review = await this.reviewRepository.getReviewById(reviewId)
    if (!review) {
      throw new AppError('Avaliação não encontrado')
    }

    await this.reviewRepository.deleteReview(reviewId)

    return { message: `Review with ID ${reviewId} deleted` }
  }
}
