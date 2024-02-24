import { Repository } from '@core/repository'

export interface Country {
  countryId: number
  country: string
  lastUpdate: Date
}

export interface CountryRepository extends Repository<Country> {}
