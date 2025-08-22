import { createContext, useReducer, useEffect } from 'react'
import { reportReducer } from '../reducers/reportReducer'
import { initialReportState } from '../constants/report'
import { generateScoreStatisticReport, getTopListReport } from '../services/api/report'
import { StatisticReportResponse, TopListReportResponse } from '../types/report'

interface ReportContextType {
    reportState: typeof initialReportState
    dispatch: React.Dispatch<{ type: string; payload: StatisticReportResponse | TopListReportResponse[] }>
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
            const start = performance.now()

            // Code block or function to measure
            const statisticReportResponse = await generateScoreStatisticReport()

            const end = performance.now()
            console.log(`Execution time: ${end - start} ms`)
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
            const start = performance.now()

            // Code block or function to measure
            const topListReportResponse = await getTopListReport()

            const end = performance.now()
            console.log(`Execution time: ${end - start} ms`)
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
