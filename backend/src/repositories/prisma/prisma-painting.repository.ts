import { Prisma } from 'generated/prisma'
import { PaintingRepository } from '../painting.repository'

export class PrismaPaintingRepository implements PaintingRepository {
  getAllPaintings(): Promise<Prisma.PaintingCreateInput[]> {
    throw new Error('Method not implemented.')
  }
  getPaintingById(id: string): Promise<Prisma.PaintingCreateInput | null> {
    throw new Error('Method not implemented.')
  }
  createPainting(
    painting: Prisma.PaintingCreateInput,
  ): Promise<Prisma.PaintingCreateInput> {
    throw new Error('Method not implemented.')
  }
  updatePainting(
    id: string,
    painting: Prisma.PaintingCreateInput,
  ): Promise<Prisma.PaintingCreateInput | null> {
    throw new Error('Method not implemented.')
  }
  deletePainting(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
