import { Repository } from '@core/repository'

export interface Store {
  storeId: number
  managerStaffId: number
  addressId: number
  lastUpdate: Date
}

export interface StoreRepository extends Repository<Store> {}
