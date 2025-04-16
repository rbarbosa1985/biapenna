import { Prisma } from 'generated/prisma'

export interface PaintingRepository {
  getAllPaintings(): Promise<Prisma.PaintingCreateManyInput[]>
  getPaintingById(id: string): Promise<Prisma.PaintingCreateManyInput | null>
  createPainting(
    painting: Prisma.PaintingCreateInput,
  ): Promise<Prisma.PaintingCreateManyInput>
  updatePainting(
    id: string,
    painting: Prisma.PaintingCreateInput,
  ): Promise<Prisma.PaintingCreateManyInput | null>
  deletePainting(id: string): Promise<void>
}
