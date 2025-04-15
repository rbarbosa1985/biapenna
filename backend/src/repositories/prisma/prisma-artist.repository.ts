import type { ArtistRepository } from '../artist.repository'
import type { Prisma } from 'generated/prisma'

export class PrismaArtistRepository implements ArtistRepository {
  getAllArtists(): Promise<Prisma.ArtistCreateInput[]> {
    throw new Error('Method not implemented.')
  }
  getArtistById(id: string): Promise<Prisma.ArtistCreateInput | null> {
    throw new Error('Method not implemented.')
  }
  createArtist(
    artist: Prisma.ArtistCreateInput,
  ): Promise<Prisma.ArtistCreateInput> {
    throw new Error('Method not implemented.')
  }
  updateArtist(
    id: string,
    artist: Prisma.ArtistCreateInput,
  ): Promise<Prisma.ArtistCreateInput | null> {
    throw new Error('Method not implemented.')
  }
  deleteArtist(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
