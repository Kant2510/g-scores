import { useState } from 'react'
import RegistrationInput from './registration-input'
import ScoreDetailsTable from './score-details'
import { ScoreData } from '../../types/score'

const ScoreQuery: React.FC = () => {
    const [scoreData, setScoreData] = useState<ScoreData[]>([])

    return (
        <div style={{ maxWidth: '600px' }}>
            <h2 style={{ marginBottom: '1rem' }}>Search student scores</h2>
            <RegistrationInput setScoreData={setScoreData} />
            <ScoreDetailsTable scoreData={scoreData} />
        </div>
    )
}
export default ScoreQuery
