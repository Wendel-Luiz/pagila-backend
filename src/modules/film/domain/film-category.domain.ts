import { Repository } from '@core/repository'
import { Category } from './category.domain'

export interface FilmCategory {
  filmId: number
  category: Category
  lastUpdate: Date
}

export interface FilmCategoryRepository extends Repository<FilmCategory> {}
