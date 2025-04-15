import type { Artist } from '@/entities/artist'
import type { Prisma } from 'generated/prisma'

export interface ArtistRepository {
  getAllArtists(): Promise<Prisma.ArtistCreateInput[]>
  getArtistById(id: string): Promise<Prisma.ArtistCreateInput | null>
  createArtist(
    artist: Prisma.ArtistCreateInput,
  ): Promise<Prisma.ArtistCreateInput>
  updateArtist(
    id: string,
    artist: Prisma.ArtistCreateInput,
  ): Promise<Prisma.ArtistCreateInput | null>
  deleteArtist(id: string): Promise<void>
}
