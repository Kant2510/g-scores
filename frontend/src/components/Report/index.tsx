import React, { useEffect, useState } from 'react'
import { Select, Card, Row, Col, Typography } from 'antd'
import { StatisticReportResponse, TopListReportResponse } from '../../types/report'
import { generateScoreStatisticReport, getTopListReport } from '../../services/api/reports'
import ChartComponent from './chart'
import TopGroupAList from './top-list'

const { Title } = Typography
// const data = {
//     subject: [
//         'math',
//         'physics',
//         'chemistry',
//         'biology',
//         'literature',
//         'geography',
//         'history',
//         'civic_education',
//         'foreign',
//     ],
//     statistics: [
//         { subject: 'civic_education', aboveOrEqualTo8: 358, from6ToUnder8: 185, from4ToUnder6: 21, under4: 0 },
//         { subject: 'foreign', aboveOrEqualTo8: 110, from6ToUnder8: 203, from4ToUnder6: 350, under4: 203 },
//         { subject: 'history', aboveOrEqualTo8: 117, from6ToUnder8: 327, from4ToUnder6: 204, under4: 22 },
//         { subject: 'math', aboveOrEqualTo8: 167, from6ToUnder8: 483, from4ToUnder6: 259, under4: 80 },
//         { subject: 'literature', aboveOrEqualTo8: 318, from6ToUnder8: 518, from4ToUnder6: 135, under4: 20 },
//         { subject: 'biology', aboveOrEqualTo8: 24, from6ToUnder8: 174, from4ToUnder6: 112, under4: 12 },
//         { subject: 'physics', aboveOrEqualTo8: 91, from6ToUnder8: 127, from4ToUnder6: 84, under4: 25 },
//         { subject: 'geography', aboveOrEqualTo8: 207, from6ToUnder8: 365, from4ToUnder6: 94, under4: 4 },
//         { subject: 'chemistry', aboveOrEqualTo8: 72, from6ToUnder8: 134, from4ToUnder6: 98, under4: 22 },
//     ],
// }

const labelMap = {
    aboveOrEqualTo8: '≥ 8',
    from6ToUnder8: '6 ≤ points < 8',
    from4ToUnder6: '4 ≤ points < 6',
    under4: '< 4',
}

const Report: React.FC = () => {
    const [statisticReportData, setStatisticReportData] = useState<StatisticReportResponse>({
        subject: [],
        statistics: [],
    })
    const [topListReportData, setTopListReportData] = useState<TopListReportResponse[]>([])
    const [selectedSubject, setSelectedSubject] = useState('total')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const statisticReportResponse = await generateScoreStatisticReport()
                const topListReportResponse = await getTopListReport()
                setStatisticReportData(statisticReportResponse)
                setTopListReportData(topListReportResponse)
            } catch (error) {
                console.error('Error fetching report data:', error)
            }
        }
        fetchData()
    }, [])

    if (!statisticReportData.subject.length) {
        return <div>Loading...</div>
    }

    const chartData = () => {
        const subjectStats = statisticReportData.statistics.find((s) => s.subject === selectedSubject)
        if (!subjectStats) return []

        return Object.entries(subjectStats)
            .filter(([key]) => key !== 'subject')
            .map(([key, value]) => ({
                level: labelMap[key as keyof typeof labelMap],
                count: value,
            }))
    }

    return (
        <Card title='📚 Student Score Report' style={{ maxWidth: '100%', margin: 'auto' }}>
            <Row>
                <Col span={12}>
                    <Title level={4} style={{ marginBottom: 20 }}>
                        {selectedSubject.replace('_', ' ').toUpperCase()} Score Statistics
                    </Title>
                    <Select
                        showSearch
                        placeholder='Select a subject'
                        style={{ width: 200, marginBottom: 20 }}
                        value={selectedSubject}
                        onChange={setSelectedSubject}
                        options={statisticReportData.subject.map((subject) => ({
                            value: subject,
                            label: subject.replace('_', ' ').toUpperCase(),
                        }))}
                    />
                    <ChartComponent data={chartData()} />
                </Col>
                <Col span={12}>
                    <Title level={4} style={{ marginBottom: 20 }}>
                        Top 10 Group A Students
                    </Title>
                    <TopGroupAList data={topListReportData} />
                </Col>
            </Row>
        </Card>
    )
}

export default Report
