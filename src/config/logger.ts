import pino, { LoggerOptions } from 'pino'
import { envApp } from './env'

const config: LoggerOptions = {
  transport:
    envApp.NODE_ENV !== 'dev'
      ? undefined
      : {
          target: 'pino-pretty',
        },
}

export const logger = pino(config)
