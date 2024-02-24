type RepositorySuccess<Data> = { success: true; data: Data }
type RepositoryFailure<Error> = { success: false; error: Error }
type RepositoryError = {
  message: string
}

export type RepositoryResponse<Data> =
  | RepositorySuccess<Data>
  | RepositoryFailure<RepositoryError>
