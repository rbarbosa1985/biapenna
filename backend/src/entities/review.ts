import type { Painting } from './painting'
import type { User } from './user'

export class Review {
  private id: string
  private user: User
  private painting: Painting
  private rating: number
  private comment: string
  private createdAt: Date
  private updatedAt: Date

  constructor(
    id: string,
    user: User,
    painting: Painting,
    rating: number,
    comment: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id
    this.user = user
    this.painting = painting
    this.rating = rating
    this.comment = comment
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  getId(): string {
    return this.id
  }

  getUser(): User {
    return this.user
  }

  getPainting(): Painting {
    return this.painting
  }

  getRating(): number {
    return this.rating
  }

  getComment(): string {
    return this.comment
  }

  getCreatedAt(): Date {
    return this.createdAt
  }

  getUpdatedAt(): Date {
    return this.updatedAt
  }

  setId(id: string): void {
    this.id = id
  }

  setUser(user: User): void {
    this.user = user
  }

  setPainting(painting: Painting): void {
    this.painting = painting
  }

  setRating(rating: number): void {
    this.rating = rating
  }

  setComment(comment: string): void {
    this.comment = comment
  }
}
