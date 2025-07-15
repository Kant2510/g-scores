interface ErrorResponse {
    code: number
    content: string
}
interface AttachedDataResponse<T> {
    message: string
    error: ErrorResponse
    data: T
}
interface NonAttachedDataResponse {
    message: string
    error: ErrorResponse
}
export type { ErrorResponse, AttachedDataResponse, NonAttachedDataResponse }
