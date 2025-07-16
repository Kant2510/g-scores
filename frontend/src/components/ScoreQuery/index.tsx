import { useState } from 'react'
import RegistrationInput from './registration-input'
import ScoreDetailsTable from './score-details'
import { ScoreData } from '../../types/score'

const ScoreQuery: React.FC = () => {
    const [scoreData, setScoreData] = useState<ScoreData[]>([])

    return (
        <div style={{ backgroundColor: 'none', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ marginBottom: '1rem' }}>Student Score Searcher</h2>
            <RegistrationInput setScoreData={setScoreData} />
            <h2 style={{ marginTop: '2rem' }}>Score Details</h2>
            <ScoreDetailsTable scoreData={scoreData} />
        </div>
    )
}
export default ScoreQuery
