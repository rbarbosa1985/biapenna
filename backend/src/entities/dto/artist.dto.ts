import type { PaintingDto } from './painting.dto'

export class ArtistDto {
  private id: string
  private name: string
  private email: string
  private biography: string | null
  private imageUrl: string | null
  private instagram: string | null
  private facebook: string | null
  private twitter: string | null
  private website: string | null
  private createdAt: Date
  private updatedAt: Date
  private paintings: PaintingDto[]

  constructor(
    id: string,
    name: string,
    email: string,
    biography: string | null,
    imageUrl: string | null,
    instagram: string | null,
    facebook: string | null,
    twitter: string | null,
    website: string | null,
    createdAt: Date,
    updatedAt: Date,
    paintings: PaintingDto[],
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.biography = biography
    this.imageUrl = imageUrl
    this.instagram = instagram
    this.facebook = facebook
    this.twitter = twitter
    this.website = website
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.paintings = paintings
  }

  public getId(): string {
    return this.id
  }
  public getName(): string {
    return this.name
  }

  public getEmail(): string {
    return this.email
  }

  public getBiography(): string | null {
    return this.biography
  }

  public getImageUrl(): string | null {
    return this.imageUrl
  }

  public getInstagram(): string | null {
    return this.instagram
  }

  public getFacebook(): string | null {
    return this.facebook
  }

  public getTwitter(): string | null {
    return this.twitter
  }

  public getWebsite(): string | null {
    return this.website
  }

  public getCreatedAt(): Date {
    return this.createdAt
  }

  public getUpdatedAt(): Date {
    return this.updatedAt
  }

  public getPaintings(): PaintingDto[] {
    return this.paintings
  }

  public setId(id: string): void {
    this.id = id
  }

  public setName(name: string): void {
    this.name = name
  }

  public setEmail(email: string): void {
    this.email = email
  }

  public setBiography(biography: string | null): void {
    this.biography = biography
  }

  public setImageUrl(imageUrl: string | null): void {
    this.imageUrl = imageUrl
  }

  public setInstagram(instagram: string | null): void {
    this.instagram = instagram
  }

  public setFacebook(facebook: string | null): void {
    this.facebook = facebook
  }

  public setTwitter(twitter: string | null): void {
    this.twitter = twitter
  }

  public setWebsite(website: string | null): void {
    this.website = website
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt
  }

  public setPaintings(paintings: PaintingDto[]): void {
    this.paintings = paintings
  }
}
