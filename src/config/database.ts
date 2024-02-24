import { Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'
import { envApp } from '@config/env'
import { DB } from '@database/types'

const dialect = new PostgresDialect({
  pool: new Pool({
    database: envApp.DB_NAME,
    host: envApp.DB_HOST,
    user: envApp.DB_USER,
    port: envApp.DB_PORT,
    max: envApp.DB_MAX_CONNECTIONS,
  }),
})

export const db = new Kysely<DB>({
  dialect,
})
