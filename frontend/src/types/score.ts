export interface ScoreQueryRequest {
    registration_number: string
}
export interface ScoreQueryResponse {
    subject: string
    score: number
}

export interface ScoreData {
    registration_number: string
    math: number
    physics: number
    chemistry: number
    biology: number
    literature: number
    history: number
    geography: number
    civil_education: number
    foreign_language: number
    foreign_language_code: string
    [key: string]: number | string // Allow additional properties
}
type ScoreDetails = {
    [key: string]: number | string
}
