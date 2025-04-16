import { Router } from 'express'

const routes = Router()
const userRoutes = require('@/routes/user.routes')
const artistRoutes = require('@/routes/artist.routes')
const paintingRoutes = require('@/routes/painting.routes')
const reviewRoutes = require('@/routes/review.routes')

routes.use('/users', userRoutes)
routes.use('/artists', artistRoutes)
routes.use('/paintings', paintingRoutes)
routes.use('/reviews', reviewRoutes)

module.exports = routes
