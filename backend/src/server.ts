import { NextFunction, Request, Response } from 'express'

const express = require('express')
const app = express()
// const cors = require('cors')
const routes = require('./routes/routes')

app.use(express.json())
// app.use(cors())
app.use(routes)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      })
    }

    console.error(error)

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  },
)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`)
})
