import { Repository } from '@core/repository'

export interface FilmActor {
  actorId: number
  filmId: number
  lastUpdate: Date
}

export interface FilmActorRepository extends Repository<FilmActor> {}
