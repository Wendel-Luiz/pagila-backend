import { Repository } from '@core/repository'
import { Inventory } from './inventory.domain'
import { Customer } from './customer.domain'
import { Staff } from './staff.domain'

export interface Rental {
  rentalId: number
  rentalDate: Date
  inventory: Inventory
  customer: Customer
  returnDate?: Date | null
  staff: Staff
  lastUpdate: Date
}

export interface RentalRepository extends Repository<Rental> {}
