import { Repository } from '@core/repository'

export interface Staff {
  staffId: number
  firstName: string
  lastName: string
  addressId: number
  email?: string
  storeId: number
  active: boolean
  username: string
  password?: string
  lastUpdate: Date
  picture?: Buffer
}

export interface StaffRepository extends Repository<Staff> {}
