import { Repository } from '@core/repository'

export interface Rental {
  rentalId: number
  rentalDate: Date
  inventoryId: number
  customerId: number
  returnDate?: Date | null
  staffId: number
  lastUpdate: Date
}

export interface RentalRepository extends Repository<Rental> {}
