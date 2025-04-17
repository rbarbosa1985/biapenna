import { env } from '@/env'
import { prisma } from '@/util/prisma'
import dayjs from 'dayjs'
import * as jwt from 'jsonwebtoken'
const uuid = require('uuid')

export interface IJwtData {
  id: string
}

export class JWTService {
  async signIn(data: IJwtData) {
    return await jwt.sign(data, env.JWT_SECRET, {
      expiresIn: '1min',
    })
  }

  async generateRefreshToken(userId: string): Promise<string> {
    const existingToken = await prisma.refreshToken.findUnique({
      where: { userId },
    })

    // If a token already exists, delete it
    if (existingToken) {
      await prisma.refreshToken.delete({
        where: { id: existingToken.id },
      })
    }

    // Create a new token

    const expires_in = dayjs().add(1, 'day').unix()
    const refresh_token = uuid.v4()

    await prisma.refreshToken.create({
      data: {
        userId,
        refresh_token,
        expires_in,
      },
    })

    return refresh_token
  }

  async verify(token: string): Promise<IJwtData | 'INVALID_TOKEN'> {
    try {
      // Verify the token
      const decoded = await jwt.verify(token, env.JWT_SECRET)

      // Check if the token is valid
      if (!decoded || typeof decoded === 'string') {
        return 'INVALID_TOKEN'
      }

      // Check if the token is expired
      const currentTime = Math.floor(Date.now() / 1000)

      return decoded as IJwtData
    } catch (error) {
      return 'INVALID_TOKEN'
    }
  }
}
