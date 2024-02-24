import { z } from 'zod'

class Env {
  public readonly NODE_ENV: string
  public readonly SERVER_PORT: number
  public readonly DB_NAME: string
  public readonly DB_HOST: string
  public readonly DB_USER: string
  public readonly DB_PORT: number
  public readonly DB_MAX_CONNECTIONS: number

  constructor() {
    const parsed = envSchema.safeParse(process.env)

    if (!parsed.success) {
      throw new Error(`Error parsing env vars ${parsed.error.format()}`)
    }

    this.NODE_ENV = parsed.data.NODE_ENV
    this.SERVER_PORT = parsed.data.SERVER_PORT
    this.DB_NAME = parsed.data.DB_NAME
    this.DB_HOST = parsed.data.DB_HOST
    this.DB_USER = parsed.data.DB_USER
    this.DB_PORT = parsed.data.DB_PORT
    this.DB_MAX_CONNECTIONS = parsed.data.DB_MAX_CONNECTIONS
  }
}

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'prod', 'test']),
  SERVER_PORT: z.string().transform((value) => Number(value)),
  DB_NAME: z.string(),
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PORT: z.string().transform((value) => Number(value)),
  DB_MAX_CONNECTIONS: z.string().transform((value) => Number(value)),
})

export const envApp = new Env()
