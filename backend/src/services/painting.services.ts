import { AppError } from '@/errors/AppError'
import { PaintingRepository } from '@/repositories/painting.repository'
import type { Prisma } from 'generated/prisma'

export class PaintingServices {
  constructor(private paintingRepository: PaintingRepository) {
    // Initialize any properties or dependencies if needed
  }

  async getAllPaintings() {
    const painting = await this.paintingRepository.getAllPaintings()
    return { painting }
  }

  async getPaintingById(paintingId: string) {
    const painting = await this.paintingRepository.getPaintingById(paintingId)

    if (!painting) {
      throw new AppError('Obra não encontrado')
    }

    return { painting }
  }

  async createPainting(paintingData: Prisma.PaintingCreateInput) {
    const painting = await this.paintingRepository.createPainting(paintingData)

    return { painting }
  }

  async updatePainting(paintingId: string, paintingData: Prisma.PaintingCreateInput) {
    const existingPainting = await this.paintingRepository.getPaintingById(paintingId)

    if (!existingPainting) {
      throw new AppError('Obra não encontrado')
    }

    const painting = await this.paintingRepository.updatePainting(paintingId, paintingData)

    return { painting }
  }

  async deletePainting(paintingId: string) {
    const painting = await this.paintingRepository.getPaintingById(paintingId)
    if (!painting) {
      throw new AppError('Obra não encontrado')
    }

    await this.paintingRepository.deletePainting(paintingId)

    return { message: `Painting with ID ${paintingId} deleted` }
  }
}
