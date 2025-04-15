import type { Review } from './review'
import { Roles } from './role'

export class User {
  private id: string
  private name: string
  private email: string
  private password: string
  private createdAt: Date
  private updatedAt: Date
  private roles: Roles

  constructor(id: string, name: string, email: string, password: string) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.roles = Roles.MEMBER
    this.createdAt = new Date()
    this.updatedAt = new Date()
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

  public getPassword(): string {
    return this.password
  }

  public getRoles(): Roles {
    return this.roles
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

  public setEmail(email: string): void {
    this.email = email
  }

  public setPassword(password: string): void {
    this.password = password
  }

  public setRoles(roles: Roles): void {
    this.roles = roles
  }
}
