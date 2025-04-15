import { PrismaReviewRepository } from '@/repositories/prisma/prisma-review.repository'
import { ReviewServices } from '../review.services'

export function makeReviewServices() {
  const reviewRepository = new PrismaReviewRepository()
  const reviewServices = new ReviewServices(reviewRepository)
  return reviewServices
}
// This function creates an instance of ReviewServices with a PrismaReviewRepository.
