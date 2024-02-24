import { Repository } from '@core/repository'
import { Store } from './store.domain'

export interface Inventory {
  inventoryId: number
  filmId: number
  store: Store
  lastUpdate: Date
}

export interface InventoryRepository extends Repository<Inventory> {}
