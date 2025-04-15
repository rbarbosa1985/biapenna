import { Prisma } from 'generated/prisma'

export interface PaintingRepository {
  getAllPaintings(): Promise<Prisma.PaintingCreateInput[]>
  getPaintingById(id: string): Promise<Prisma.PaintingCreateInput | null>
  createPainting(
    painting: Prisma.PaintingCreateInput,
  ): Promise<Prisma.PaintingCreateInput>
  updatePainting(
    id: string,
    painting: Prisma.PaintingCreateInput,
  ): Promise<Prisma.PaintingCreateInput | null>
  deletePainting(id: string): Promise<void>
}
