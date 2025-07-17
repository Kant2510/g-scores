interface ReportUnit {
    subject: string
    aboveOrEqualTo8: number
    from6ToUnder8: number
    from4ToUnder6: number
    under4: number
    [subject: string]: number | string // Allow additional properties
}

export interface StatisticReportResponse {
    subject: String[]
    statistics: ReportUnit[]
}

export interface TopListReportResponse {
    registration_number: string
    math: number
    physics: number
    chemistry: number
    total: number
    [key: string]: number | string // Allow additional properties
}

export interface ReportContextType {
    statisticReport: StatisticReportResponse
    topListReport: TopListReportResponse[]
    loading: boolean
    error: string | null
}
