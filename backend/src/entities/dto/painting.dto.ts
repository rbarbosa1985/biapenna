export class PaintingDto {
  private id: string
  private imageUrl: string | null
  private createdAt: Date
  private updatedAt: Date
  private title: string
  private description: string | null
  private technique: string | null
  private year: number | null
  private price: number | null
  private dimensions: string | null
  private artistId: string

  constructor(
    id: string,
    imageUrl: string | null,
    createdAt: Date,
    updatedAt: Date,
    title: string,
    description: string | null,
    technique: string | null,
    year: number | null,
    price: number | null,
    dimensions: string | null,
    artistId: string,
  ) {
    this.id = id
    this.imageUrl = imageUrl
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.title = title
    this.description = description
    this.technique = technique
    this.year = year
    this.price = price
    this.dimensions = dimensions
    this.artistId = artistId
  }

  public getId(): string {
    return this.id
  }

  public getImageUrl(): string | null {
    return this.imageUrl
  }

  public getCreatedAt(): Date {
    return this.createdAt
  }

  public getUpdatedAt(): Date {
    return this.updatedAt
  }

  public getTitle(): string {
    return this.title
  }

  public getDescription(): string | null {
    return this.description
  }

  public getTechnique(): string | null {
    return this.technique
  }

  public getYear(): number | null {
    return this.year
  }

  public getPrice(): number | null {
    return this.price
  }

  public getDimensions(): string | null {
    return this.dimensions
  }

  public getArtistId(): string {
    return this.artistId
  }

  public setId(id: string): void {
    this.id = id
  }

  public setImageUrl(imageUrl: string | null): void {
    this.imageUrl = imageUrl
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt
  }

  public setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt
  }

  public setTitle(title: string): void {
    this.title = title
  }

  public setDescription(description: string | null): void {
    this.description = description
  }

  public setTechnique(technique: string | null): void {
    this.technique = technique
  }

  public setYear(year: number | null): void {
    this.year = year
  }

  public setPrice(price: number | null): void {
    this.price = price
  }

  public setDimensions(dimensions: string | null): void {
    this.dimensions = dimensions
  }

  public setArtistId(artistId: string): void {
    this.artistId = artistId
  }
}
