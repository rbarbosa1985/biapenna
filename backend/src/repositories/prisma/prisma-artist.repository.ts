import { ArtistRepository } from '../artist.repository'
import { Prisma } from 'generated/prisma'
import { prisma } from '@/util/prisma'
import { ArtistDto } from '@/entities/dto/artist.dto'
import { PaintingDto } from '@/entities/dto/painting.dto'

export class PrismaArtistRepository implements ArtistRepository {
  async getAllArtists(): Promise<Prisma.ArtistCreateInput[]> {
    const artists = await prisma.artist.findMany()

    return artists
  }

  async getArtistById(id: string): Promise<ArtistDto | null> {
    const artist = await prisma.artist.findUnique({
      where: {
        id,
      },
      include: {
        paintings: true,
      },
    })

    if (!artist) {
      return null
    }

    let paintingDto: PaintingDto[] = artist.paintings.map(
      (painting) =>
        new PaintingDto(
          painting.id,
          painting.imageUrl,
          painting.createdAt,
          painting.updatedAt,
          painting.title,
          painting.description,
          painting.technique,
          painting.year,
          painting.price,
          painting.dimensions,
          painting.artistId,
        ),
    )

    const artistDto = new ArtistDto(
      artist.id,
      artist.name,
      artist.email,
      artist.biography,
      artist.imageUrl,
      artist.instagram,
      artist.facebook,
      artist.twitter,
      artist.website,
      artist.createdAt,
      artist.updatedAt,
      paintingDto,
    )

    return artistDto
  }

  async createArtist(artist: Prisma.ArtistCreateInput): Promise<Prisma.ArtistCreateInput> {
    const newArtist = await prisma.artist.create({
      data: artist,
    })
    return newArtist
  }

  async updateArtist(id: string, artist: Prisma.ArtistCreateInput): Promise<Prisma.ArtistCreateInput | null> {
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
