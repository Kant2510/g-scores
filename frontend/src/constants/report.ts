import { ReportContextType } from '../types/report'

export const initialReportState: ReportContextType = {
    statisticReport: {
        subject: [],
        statistics: [],
    },
    topListReport: [],
    loading: false,
    error: null,
}
