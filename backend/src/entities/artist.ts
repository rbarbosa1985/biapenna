export class Artist {
  private id: string
  private name: string
  private biography: string
  private imageUrl: string
  private instagram: string
  private facebook: string
  private twitter: string
  private website: string
  private createdAt: Date
  private updatedAt: Date

  constructor(
    id: string,
    name: string,
    biography: string,
    imageUrl: string,
    instagram: string,
    facebook: string,
    twitter: string,
    website: string,
  ) {
    this.id = id
    this.name = name
    this.biography = biography
    this.imageUrl = imageUrl
    this.instagram = instagram
    this.facebook = facebook
    this.twitter = twitter
    this.website = website
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }

  public getId(): string {
    return this.id
  }

  public getName(): string {
    return this.name
  }

  public getBiography(): string {
    return this.biography
  }

  public getImageUrl(): string {
    return this.imageUrl
  }

  public getInstagram(): string {
    return this.instagram
  }
  public getFacebook(): string {
    return this.facebook
  }

  public getTwitter(): string {
    return this.twitter
  }

  public getWebsite(): string {
    return this.website
  }

  public getCreatedAt(): Date {
    return this.createdAt
  }

  public getUpdatedAt(): Date {
    return this.updatedAt
  }

  public setName(name: string): void {
    this.name = name
  }

  public setBiography(biography: string): void {
    this.biography = biography
  }

  public setImageUrl(imageUrl: string): void {
    this.imageUrl = imageUrl
  }
}
