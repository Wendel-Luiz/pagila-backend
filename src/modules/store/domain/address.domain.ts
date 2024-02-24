import { Repository } from '@core/repository'
import { City } from './city.domain'

export interface Address {
  addressId: number
  address: string
  address2?: string | null
  district: string
  city: City
  postalCode?: string | null
  phone: string
  lastUpdate: Date
}

export interface AddressRepository extends Repository<Address> {}
