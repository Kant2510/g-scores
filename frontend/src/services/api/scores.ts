import axios from 'axios'
import { ScoreQueryRequest, ScoreQueryResponse } from '../../types/score'
import { API_BASE_URL } from '../../constants/api'

const retrieveScore = async (request: ScoreQueryRequest): Promise<ScoreQueryResponse> => {
    const response = await axios.post(`${API_BASE_URL}/scores/search`, request)
    return response.data
}

export { retrieveScore }
