import { Repository } from '@core/repository'

export interface Actor {
  actorId: number
  firstName: string
  lastName: string
  lastUpdate: Date
}

export interface ActorRepository extends Repository<Actor> {}
