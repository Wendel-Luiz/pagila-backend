import { Repository } from '@core/repository'

export interface Payment {
  paymentId: number
  customerId: number
  staffId: number
  rentalId: number
  amount: number
  paymentDate: Date
}

export interface PaymentRepository extends Repository<Payment> {}
