import { Router } from 'express'

//Controller
const ArtistController = require('@/controllers/artist.controller')
const artistController = new ArtistController()
//Routes
const artistRoutes = Router()

artistRoutes.get('/', artistController.findAll)
artistRoutes.post('/', artistController.createArtist)
artistRoutes.get('/:id', artistController.getArtistById)
artistRoutes.put('/:id', artistController.updateArtist)
artistRoutes.delete('/:id', artistController.deleteArtist)

module.exports = artistRoutes
