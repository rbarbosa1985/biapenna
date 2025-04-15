import type { Artist } from '@/entities/artist'

interface ArtistRepository {
  getAllArtists(): Promise<Artist[]>
  getArtistById(id: string): Promise<Artist | null>
  createArtist(artist: Artist): Promise<Artist>
  updateArtist(id: string, artist: Artist): Promise<Artist | null>
  deleteArtist(id: string): Promise<void>
}
