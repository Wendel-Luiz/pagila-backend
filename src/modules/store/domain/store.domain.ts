import { Repository } from '@core/repository'
import { Staff } from './staff.domain'
import { Address } from './address.domain'

export interface Store {
  storeId: number
  managerStaff: Staff
  address: Address
  lastUpdate: Date
}

export interface StoreRepository extends Repository<Store> {}
