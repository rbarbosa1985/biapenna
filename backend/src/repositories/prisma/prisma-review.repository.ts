import { ReviewRepository } from '../review.repository'
import { Prisma } from 'generated/prisma'
import { prisma } from '@/util/prisma'

export class PrismaReviewRepository implements ReviewRepository {
  async getReviewsByUserId(userId: string): Promise<Prisma.ReviewCreateManyInput[]> {
    const reviews = await prisma.review.findMany({
      where: {
        userId,
      },
      include: {
        painting: true,
      },
    })
    return reviews
  }

  async getAllReviews(): Promise<Prisma.ReviewCreateManyInput[]> {
    const reviews = await prisma.review.findMany({
      include: {
        user: true,
        painting: true,
      },
    })

    return reviews
  }

  async getReviewById(id: string): Promise<Prisma.ReviewCreateManyInput | null> {
    const review = await prisma.review.findUnique({
      where: {
        id,
      },
    })
    return review
  }

  async createReview(review: Prisma.ReviewCreateInput): Promise<Prisma.ReviewCreateManyInput> {
    const newReview = await prisma.review.create({
      data: review,
    })
    return newReview
  }

  async updateReview(id: string, review: Prisma.ReviewCreateInput): Promise<Prisma.ReviewCreateManyInput | null> {
    const updatedReview = await prisma.review.update({
      where: {
        id,
      },
      data: review,
    })
    return updatedReview
  }

  async deleteReview(id: string): Promise<void> {
    await prisma.review.delete({
      where: {
        id,
      },
    })
  }
}
