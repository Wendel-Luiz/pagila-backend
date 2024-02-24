import { Repository } from '@core/repository'

export interface Film {
  filmId: number
  title: string
  description?: string
  releaseYear?: number
  languageId: number
  originalLanguageId?: number
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
