import express, { json, urlencoded } from 'express'
import cors from 'cors'
import { envApp } from '@config/env'
import { logger } from '@config/logger'

export class App {
  private readonly app

  constructor() {
    this.app = express()
  }

  configure() {
    this.app.use(cors())
    this.app.use(urlencoded({ extended: true }))
    this.app.use(json())
  }

  serve() {
    this.app.listen(envApp.SERVER_PORT, () =>
      logger.info(`Server listening on port ${envApp.SERVER_PORT}...`),
    )
  }
}
