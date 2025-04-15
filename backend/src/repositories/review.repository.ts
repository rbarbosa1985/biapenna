import type { Review } from '@/entities/review'

export interface ReviewRepository {
  getAllReviews(): Promise<Review[]>
  getReviewById(id: string): Promise<Review | null>
  createReview(review: Review): Promise<Review>
  updateReview(id: string, review: Review): Promise<Review | null>
  deleteReview(id: string): Promise<void>
}
