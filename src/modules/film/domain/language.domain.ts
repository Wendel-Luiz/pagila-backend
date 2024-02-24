import { Repository } from '@core/repository'

export interface Language {
  languageId: number
  name: string
  lastUpdate: Date
}

export interface LanguageRepository extends Repository<Language> {}
