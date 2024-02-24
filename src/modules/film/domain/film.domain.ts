import { Repository } from '@core/repository'
import { Language } from './language.domain'

export interface Film {
  filmId: number
  title: string
  description?: string
  releaseYear?: number
  language: Language
  originalLanguage?: Language
  rentalDuration: number
  rentalRate: number
  length?: number
  replacementCost: number
  rating: string
  lastUpdate: Date
  specialFeatures?: string[]
  fulltext: string
}

export interface FilmRepository extends Repository<Film> {}
