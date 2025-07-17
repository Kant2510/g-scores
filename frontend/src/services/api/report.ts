import axios from 'axios'
import { StatisticReportResponse, TopListReportResponse } from '../../types/report'
import { API_BASE_URL } from '../../constants/api'

const generateScoreStatisticReport = async (): Promise<StatisticReportResponse> => {
    const response = await axios.get(`${API_BASE_URL}/reports/statistic`)
    return response.data
}

const getTopListReport = async (): Promise<TopListReportResponse[]> => {
    const response = await axios.get(`${API_BASE_URL}/reports/top-list`)
    return response.data
}

export { generateScoreStatisticReport, getTopListReport }
