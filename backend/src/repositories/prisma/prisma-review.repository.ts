import { ReviewRepository } from '../review.repository'
import { Prisma } from 'generated/prisma'

export class PrismaReviewRepository implements ReviewRepository {
  getAllReviews(): Promise<Prisma.ReviewCreateInput[]> {
    throw new Error('Method not implemented.')
  }
  getReviewById(id: string): Promise<Prisma.ReviewCreateInput | null> {
    throw new Error('Method not implemented.')
  }
  createReview(
    review: Prisma.ReviewCreateInput,
  ): Promise<Prisma.ReviewCreateInput> {
    throw new Error('Method not implemented.')
  }
  updateReview(
    id: string,
    review: Prisma.ReviewCreateInput,
  ): Promise<Prisma.ReviewCreateInput | null> {
    throw new Error('Method not implemented.')
  }
  deleteReview(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
