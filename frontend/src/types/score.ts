export interface ScoreQueryRequest {
    registration_number: string
}

interface SubjectScore {
    subject: string
    score: number
}

export interface ScoreQueryResponse {
    registrationNumber: string
    scores: SubjectScore[]
    foreignLanguageCode: string | null // Optional, if applicable
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
    foreign_language_code: string | null // Optional, if applicable
    [key: string]: number | string | null // Allow additional properties
}
