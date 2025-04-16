import { env } from '@/env'
import * as jwt from 'jsonwebtoken'

export interface IJwtData {
  id: string
}

export class JWTService {
  async signIn(data: IJwtData) {
    return await jwt.sign(data, env.JWT_SECRET, {
      expiresIn: '1h',
    })
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
