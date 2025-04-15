import type { Prisma } from 'generated/prisma'

export interface ReviewRepository {
  getAllReviews(): Promise<Prisma.ReviewCreateInput[]>
  getReviewById(id: string): Promise<Prisma.ReviewCreateInput | null>
  createReview(
    review: Prisma.ReviewCreateInput,
  ): Promise<Prisma.ReviewCreateInput>
  updateReview(
    id: string,
    review: Prisma.ReviewCreateInput,
  ): Promise<Prisma.ReviewCreateInput | null>
  deleteReview(id: string): Promise<void>
}
