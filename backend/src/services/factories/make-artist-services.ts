import { PrismaArtistRepository } from '@/repositories/prisma/prisma-artist.repository'
import { ArtistServices } from '../artist.services'

export function makeArtistServices() {
  const artistRepository = new PrismaArtistRepository()
  const artistServices = new ArtistServices(artistRepository)
  return artistServices
}
// This function creates an instance of ArtistServices with a PrismaArtistRepository.
