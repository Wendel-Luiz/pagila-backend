import { Repository } from '@core/repository'

export interface Category {
  categoryId: number
  name: string
  lastUpdate: Date
}

export interface CategoryRepository extends Repository<Category> {}
