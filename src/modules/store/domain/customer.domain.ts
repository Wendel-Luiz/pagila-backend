import { Repository } from '@core/repository'
import { Address } from './address.domain'

export interface Customer {
  customerId: number
  storeId: number
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
