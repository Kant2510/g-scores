import { initialReportState } from '../constants/report'
import { ReportContextType, StatisticReportResponse, TopListReportResponse } from '../types/report'

export const reportReducer = (
    state = initialReportState,
    action: { type: string; payload: StatisticReportResponse | TopListReportResponse[] }
): ReportContextType => {
    switch (action.type) {
        case 'SET_STATISTIC_REPORT':
            return {
                ...state,
                statisticReport: action.payload as StatisticReportResponse,
                loading: false,
                error: null,
            }
        case 'SET_TOP_LIST_REPORT':
            return {
                ...state,
                topListReport: action.payload as TopListReportResponse[],
                loading: false,
                error: null,
            }
        default:
            return state
    }
}
