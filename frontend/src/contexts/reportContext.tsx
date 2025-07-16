import { createContext, useReducer, useEffect } from 'react'
import { reportReducer } from '../reducers/reportReducer'
import { initialReportState } from '../constants/reports'
import { generateScoreStatisticReport, getTopListReport } from '../services/api/reports'

interface ReportContextType {
    reportState: typeof initialReportState
    dispatch: React.Dispatch<{ type: string; payload: any }>
    loadStatisticReport: () => Promise<void>
    loadTopListReport: () => Promise<void>
}

export const ReportContext = createContext<ReportContextType>({
    reportState: initialReportState,
    dispatch: () => null,
    loadStatisticReport: async () => {},
    loadTopListReport: async () => {},
})

interface ReportContextProviderProps {
    children: React.ReactNode
}

const ReportContextProvider: React.FC<ReportContextProviderProps> = ({ children }) => {
    const [reportState, dispatch] = useReducer(reportReducer, initialReportState)

    const loadStatisticReport = async () => {
        try {
            const statisticReportResponse = await generateScoreStatisticReport()
            dispatch({
                type: 'SET_STATISTIC_REPORT',
                payload: statisticReportResponse,
            })
        } catch (error) {
            console.error('Error fetching statistic report:', error)
            // dispatch({
            //     type: 'REMOVE_REPORT',
            // })
        }
    }

    const loadTopListReport = async () => {
        try {
            const topListReportResponse = await getTopListReport()
            dispatch({
                type: 'SET_TOP_LIST_REPORT',
                payload: topListReportResponse,
            })
        } catch (error) {
            console.error('Error fetching top list report:', error)
        }
    }

    useEffect(() => {
        loadStatisticReport()
    }, [])

    useEffect(() => {
        loadTopListReport()
    }, [])

    // Context data
    const reportContextData = {
        reportState,
        dispatch,
        loadStatisticReport,
        loadTopListReport,
    }

    // Return provider
    return <ReportContext.Provider value={reportContextData}>{children}</ReportContext.Provider>
}

export default ReportContextProvider
