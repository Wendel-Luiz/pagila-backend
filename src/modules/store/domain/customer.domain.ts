import { Repository } from '@core/repository'
import { Address } from './address.domain'
import { Store } from './store.domain'

export interface Customer {
  customerId: number
  store: Store
  firstName: string
  lastName: string
  email?: string
  address: Address
  activeBool: boolean
  createDate: Date
  lastUpdate: Date
  active?: number
}

export interface CustomerRepository extends Repository<Customer> {}
