import { Repository } from '@core/repository'

export interface Inventory {
  inventoryId: number
  filmId: number
  storeId: number
  lastUpdate: Date
}

export interface InventoryRepository extends Repository<Inventory> {}
