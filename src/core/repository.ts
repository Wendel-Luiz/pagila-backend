type RepositorySuccess<Data> = { success: true; data: Data }
type RepositoryFailure<Error> = { success: false; error: Error }
type RepositoryError = {
  message: string
}

export type RepositoryResponse<Data> =
  | RepositorySuccess<Data>
  | RepositoryFailure<RepositoryError>

export type Repository<T> = {
  insert: (entity: T) => Promise<RepositoryResponse<T>>
  update: (entity: T) => Promise<RepositoryResponse<T>>
  delete: (entity: T) => Promise<RepositoryResponse<T>>
  findById: (id: number) => Promise<RepositoryResponse<T>>
  findFiltered: (partial: Partial<T>) => Promise<RepositoryResponse<T[]>>
}
