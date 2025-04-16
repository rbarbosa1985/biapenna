import type { Prisma } from 'generated/prisma'

export interface ReviewRepository {
  getAllReviews(): Promise<Prisma.ReviewCreateManyInput[]>
  getReviewById(id: string): Promise<Prisma.ReviewCreateManyInput | null>
  createReview(review: Prisma.ReviewCreateInput): Promise<Prisma.ReviewCreateManyInput>
  updateReview(id: string, review: Prisma.ReviewCreateInput): Promise<Prisma.ReviewCreateManyInput | null>
  deleteReview(id: string): Promise<void>
  getReviewsByUserId(userId: string): Promise<Prisma.ReviewCreateManyInput[]>
}
