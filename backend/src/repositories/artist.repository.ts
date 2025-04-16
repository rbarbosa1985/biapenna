import type { ArtistDto } from '@/entities/dto/artist.dto'
import type { Prisma } from 'generated/prisma'

export interface ArtistRepository {
  getAllArtists(): Promise<Prisma.ArtistCreateInput[]>
  getArtistById(id: string): Promise<ArtistDto | null>
  createArtist(artist: Prisma.ArtistCreateInput): Promise<Prisma.ArtistCreateInput>
  updateArtist(id: string, artist: Prisma.ArtistCreateInput): Promise<Prisma.ArtistCreateInput | null>
  deleteArtist(id: string): Promise<void>
}
