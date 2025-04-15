import type { Painting } from '@/entities/painting'

interface PaintingRepository {
  getAllPaintings(): Promise<Painting[]>
  getPaintingById(id: string): Promise<Painting | null>
  createPainting(painting: Painting): Promise<Painting>
  updatePainting(id: string, painting: Painting): Promise<Painting | null>
  deletePainting(id: string): Promise<void>
}
