import { Router } from 'express'

//Controller
const ArtistController = require('@/controllers/artist.controller')
const artistController = new ArtistController()
//Routes
const artistRoutes = Router()

artistRoutes.get('/', artistController.findAll)

module.exports = artistRoutes
