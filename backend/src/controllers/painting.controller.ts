import { makePaintingServices } from '@/services/factories/make-painting-services'
import { Request, Response } from 'express'
const paintingService = makePaintingServices()
class PaintingController {
  constructor() {}

  async findAll(request: Request, response: Response) {
    const paintings = await paintingService.getAllPaintings()
    return response.status(200).json(paintings)
  }

  async getPaintingById(request: Request, response: Response) {
    const paintingId = request.params.id

    const { painting } = await paintingService.getPaintingById(paintingId)

    return response.status(200).json(painting)
  }

  async createPainting(request: Request, response: Response) {
    const paintingData = request.body

    const { painting } = await paintingService.createPainting(paintingData)

    return response.status(201).json(painting)
  }

  async updatePainting(request: Request, response: Response) {
    const paintingId = request.params.id
    const paintingData = request.body

    const { painting } = await paintingService.updatePainting(
      paintingId,
      paintingData,
    )

    return response.status(200).json(painting)
  }

  async deletePainting(request: Request, response: Response) {
    const paintingId = request.params.id

    await paintingService.deletePainting(paintingId)

    return response.status(204).send()
  }
}

module.exports = PaintingController
