import { Repository } from '@core/repository'

export interface FilmCategory {
  filmId: number
  categoryId: number
  lastUpdate: Date
}

export interface FilmCategoryRepository extends Repository<FilmCategory> {}
