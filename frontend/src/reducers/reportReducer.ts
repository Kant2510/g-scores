import { initialReportState } from '../constants/reports'
import { ReportContextType } from '../types/report'

export const reportReducer = (
    state = initialReportState,
    action: { type: string; payload: any }
): ReportContextType => {
    switch (action.type) {
        case 'SET_STATISTIC_REPORT':
            return {
                ...state,
                statisticReport: action.payload,
                loading: false,
                error: null,
            }
        case 'SET_TOP_LIST_REPORT':
            return {
                ...state,
                topListReport: action.payload,
                loading: false,
                error: null,
            }
        default:
            return state
    }
}
