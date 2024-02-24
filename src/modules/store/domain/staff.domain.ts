import { Repository } from '@core/repository'
import { Address } from './address.domain'
import { Store } from './store.domain'

export interface Staff {
  staffId: number
  firstName: string
  lastName: string
  address: Address
  email?: string
  store: Store
  active: boolean
  username: string
  password?: string
  lastUpdate: Date
  picture?: Buffer
}

export interface StaffRepository extends Repository<Staff> {}
