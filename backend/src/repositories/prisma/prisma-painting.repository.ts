import { Prisma } from 'generated/prisma'
import { PaintingRepository } from '../painting.repository'
import { prisma } from '@/util/prisma'

export class PrismaPaintingRepository implements PaintingRepository {
  async getAllPaintings(): Promise<Prisma.PaintingCreateManyInput[]> {
    const paintings = await prisma.painting.findMany()

    return paintings
  }

  async getPaintingById(
    id: string,
  ): Promise<Prisma.PaintingCreateManyInput | null> {
    const painting = await prisma.painting.findUnique({
      where: {
        id,
      },
    })
    return painting
  }

  async createPainting(
    painting: Prisma.PaintingCreateInput,
  ): Promise<Prisma.PaintingCreateManyInput> {
    const newPainting = await prisma.painting.create({
      data: painting,
    })
    return newPainting
  }

  async updatePainting(
    id: string,
    painting: Prisma.PaintingCreateInput,
  ): Promise<Prisma.PaintingCreateManyInput | null> {
    const updatedPainting = await prisma.painting.update({
      where: {
        id,
      },
      data: painting,
    })
    return updatedPainting
  }

  async deletePainting(id: string): Promise<void> {
    await prisma.painting.delete({
      where: {
        id,
      },
    })
  }
}
