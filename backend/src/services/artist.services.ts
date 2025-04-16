import type { ArtistDto } from '@/entities/dto/artist.dto'
import { AppError } from '@/errors/AppError'
import { ArtistRepository } from '@/repositories/artist.repository'
import type { Prisma } from 'generated/prisma'

export class ArtistServices {
  constructor(private artistRepository: ArtistRepository) {
    // Initialize any properties or dependencies if needed
  }

  async getAllArtists() {
    const artist = await this.artistRepository.getAllArtists()
    return { artist }
  }

  async getArtistById(artistId: string): Promise<ArtistDto | null> {
    const artist = await this.artistRepository.getArtistById(artistId)

    if (!artist) {
      throw new AppError('Artista não encontrado')
    }

    return artist
  }

  async createArtist(artistData: Prisma.ArtistCreateInput) {
    const artist = await this.artistRepository.createArtist(artistData)

    return { artist }
  }

  async updateArtist(artistId: string, artistData: Prisma.ArtistCreateInput) {
    const existingArtist = await this.artistRepository.getArtistById(artistId)

    if (!existingArtist) {
      throw new AppError('Artista não encontrado')
    }

    const artist = await this.artistRepository.updateArtist(artistId, artistData)

    return { artist }
  }

  async deleteArtist(artistId: string) {
    const artist = await this.artistRepository.getArtistById(artistId)
    if (!artist) {
      throw new AppError('Artista não encontrado')
    }

    await this.artistRepository.deleteArtist(artistId)

    return { message: `Artist with ID ${artistId} deleted` }
  }
}
