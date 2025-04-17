import { Router } from 'express'

//Controller
const ArtistController = require('@/controllers/artist.controller')
const artistController = new ArtistController()
//Middleware
const ensureAuthenticated = require('@/middlewares/ensureAuthenticated')
//Routes
const artistRoutes = Router()

artistRoutes.get('/', artistController.findAll)
artistRoutes.post('/', ensureAuthenticated, artistController.createArtist)
artistRoutes.get('/:id', artistController.getArtistById)
artistRoutes.put('/:id', ensureAuthenticated, artistController.updateArtist)
artistRoutes.delete('/:id', ensureAuthenticated, artistController.deleteArtist)

module.exports = artistRoutes
