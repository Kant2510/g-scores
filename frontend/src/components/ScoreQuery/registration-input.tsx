import { Input, message } from 'antd'
import { ScoreData } from '../../types/score'
import { retrieveScore } from '../../services/api/scores'
const { Search } = Input

interface RegistrationInputProps {
    setScoreData: React.Dispatch<React.SetStateAction<ScoreData[]>>
}

const RegistrationInput: React.FC<RegistrationInputProps> = ({ setScoreData }) => {
    const [messageApi, contextHolder] = message.useMessage()

    const onSearchHandle = async (value: string) => {
        const request = { registration_number: value }
        try {
            const response = await retrieveScore(request)

            const score: ScoreData = response.scores.reduce((acc, item) => {
                let key = item.subject === 'foreign' ? 'foreign_language' : item.subject
                acc[key] = item.score
                return acc
            }, {} as ScoreData)
            score.registration_number = response.registrationNumber
            score.foreign_language_code = response.foreignLanguageCode
            setScoreData([score])
        } catch (error: any) {
            console.error('Error fetching score:', error)
            messageApi.error(`Failed to fetch score data: ${error.response.data.message}. Please try again.`)
            setScoreData([])
        }
    }
    return (
        <>
            {contextHolder}
            <Search
                placeholder='Enter registration number'
                onSearch={(value) => onSearchHandle(value)}
                style={{ width: 300 }}
                enterButton
            />
        </>
    )
}

export default RegistrationInput
