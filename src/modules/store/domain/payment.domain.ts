import { Repository } from '@core/repository'
import { Customer } from './customer.domain'
import { Staff } from './staff.domain'
import { Rental } from './rental.domain'

export interface Payment {
  paymentId: number
  customer: Customer
  staff: Staff
  rental: Rental
  amount: number
  paymentDate: Date
}

export interface PaymentRepository extends Repository<Payment> {}
