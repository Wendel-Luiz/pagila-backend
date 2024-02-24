import { Repository } from '@core/repository'
import { Film } from './film.domain'
import { Actor } from './actor.domain'

export interface FilmActor {
  actor: Actor
  film: Film
  lastUpdate: Date
}

export interface FilmActorRepository extends Repository<FilmActor> {}
