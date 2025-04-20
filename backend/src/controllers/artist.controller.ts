import { makeArtistServices } from '@/services/factories/make-artist-services'
import { Request, Response } from 'express'
import { z } from 'zod'
const artistService = makeArtistServices()
class ArtistController {
  constructor() {}

  async findAll(request: Request, response: Response) {
    const artists = await artistService.getAllArtists()
    return response.status(200).json(artists)
  }

  async getArtistById(request: Request, response: Response) {
    const artistId = request.params.id

    const artist = await artistService.getArtistById(artistId)

    return response.status(200).json(artist)
  }

  async createArtist(request: Request, response: Response) {
    const createArtistBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      biography: z.string().nullable(),
      imageUrl: z.string().nullable(),
      instagram: z.string().nullable(),
      facebook: z.string().nullable(),
      twitter: z.string().nullable(),
      website: z.string().nullable(),
    })
    const artistData = createArtistBodySchema.parse(request.body)

    const { artist } = await artistService.createArtist(artistData)

    return response.status(201).json(artist)
  }

  async updateArtist(request: Request, response: Response) {
    const artistId = request.params.id
    const createArtistBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      biography: z.string().nullable(),
      imageUrl: z.string().nullable(),
      instagram: z.string().nullable(),
      facebook: z.string().nullable(),
      twitter: z.string().nullable(),
      website: z.string().nullable(),
    })
    const artistData = createArtistBodySchema.parse(request.body)

    const { artist } = await artistService.updateArtist(artistId, artistData)

    return response.status(200).json(artist)
  }

  async deleteArtist(request: Request, response: Response) {
    const artistId = request.params.id

    await artistService.deleteArtist(artistId)

    return response.status(204).send()
  }
}

module.exports = ArtistController
