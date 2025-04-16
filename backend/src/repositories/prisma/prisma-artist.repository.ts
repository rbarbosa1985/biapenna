import { ArtistRepository } from '../artist.repository'
import { Prisma } from 'generated/prisma'
import { prisma } from '@/util/prisma'

export class PrismaArtistRepository implements ArtistRepository {
  async getAllArtists(): Promise<Prisma.ArtistCreateInput[]> {
    const artists = await prisma.artist.findMany()

    return artists
  }

  async getArtistById(id: string): Promise<Prisma.ArtistCreateInput | null> {
    const artist = await prisma.artist.findUnique({
      where: {
        id,
      },
    })
    return artist
  }

  async createArtist(
    artist: Prisma.ArtistCreateInput,
  ): Promise<Prisma.ArtistCreateInput> {
    const newArtist = await prisma.artist.create({
      data: artist,
    })
    return newArtist
  }

  async updateArtist(
    id: string,
    artist: Prisma.ArtistCreateInput,
  ): Promise<Prisma.ArtistCreateInput | null> {
    const updatedArtist = await prisma.artist.update({
      where: {
        id,
      },
      data: artist,
    })
    return updatedArtist
  }

  async deleteArtist(id: string): Promise<void> {
    await prisma.artist.delete({
      where: {
        id,
      },
    })
  }
}
