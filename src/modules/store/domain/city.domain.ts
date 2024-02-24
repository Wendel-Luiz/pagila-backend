import { Repository } from '@core/repository'
import { Country } from './country.domain'

export interface City {
  cityId: number
  city: string
  country: Country
  lastUpdate: Date
}

export interface CountryRepository extends Repository<City> {}
