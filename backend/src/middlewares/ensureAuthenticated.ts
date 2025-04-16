import { JWTService, type IJwtData } from '@/services/jwt.service'
import type { NextFunction, Request, Response } from 'express'

export async function EnsureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // Get Authorization header
  const jwtService = new JWTService()
  const { authorization } = request.headers

  // Check if user is authenticated
  if (!authorization) {
    return response.status(401).json({ error: 'Unauthorized' })
  }

  // Check if is Bearer token
  const [type, token] = authorization.split(' ')

  if (type !== 'Bearer' || !token) {
    return response.status(401).json({ error: 'Unauthorized' })
  }

  try {
    // Check if token is valid
    const jwtData = await jwtService.verify(token)

    if (jwtData === 'INVALID_TOKEN') {
      return response.status(401).json({ error: 'Unauthorized' })
    }

    request.headers.userId = jwtData.id

    return next()
  } catch (error) {
    return response.status(401).json({ error: 'Unauthorized' })
  }
}

module.exports = EnsureAuthenticated
