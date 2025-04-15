import { PrismaPaintingRepository } from '@/repositories/prisma/prisma-painting.repository'
import { PaintingServices } from '../painting.services'

export function makePaintingServices() {
  const paintingRepository = new PrismaPaintingRepository()
  const paintingServices = new PaintingServices(paintingRepository)
  return paintingServices
}
// This function creates an instance of PaintingServices with a PrismaPaintingRepository.
