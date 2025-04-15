import type { Artist } from './artist'

export class Painting {
  private id: string
  private title: string
  private description: string
  private imageUrl: string
  private technique: string
  private year: number
  private price: number
  private artist: Artist
  private createdAt: Date
  private updatedAt: Date

  constructor(
    id: string,
    title: string,
    description: string,
    imageUrl: string,
    technique: string,
    year: number,
    price: number,
    artist: Artist,
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.imageUrl = imageUrl
    this.technique = technique
    this.year = year
    this.price = price
    this.artist = artist
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }

  public getId(): string {
    return this.id
  }

  public getTitle(): string {
    return this.title
  }

  public getDescription(): string {
    return this.description
  }

  public getImageUrl(): string {
    return this.imageUrl
  }

  public getTechnique(): string {
    return this.technique
  }

  public getYear(): number {
    return this.year
  }

  public getPrice(): number {
    return this.price
  }

  public getArtist(): Artist {
    return this.artist
  }

  public getCreatedAt(): Date {
    return this.createdAt
  }

  public getUpdatedAt(): Date {
    return this.updatedAt
  }

  public setTitle(title: string): void {
    this.title = title
  }

  public setDescription(description: string): void {
    this.description = description
  }

  public setImageUrl(imageUrl: string): void {
    this.imageUrl = imageUrl
  }

  public setTechnique(technique: string): void {
    this.technique = technique
  }

  public setYear(year: number): void {
    this.year = year
  }

  public setPrice(price: number): void {
    this.price = price
  }

  public setArtist(artist: Artist): void {
    this.artist = artist
  }
}
