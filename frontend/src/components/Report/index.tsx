import React, { useContext, useState } from 'react'
import { Select, Card, Row, Col, Typography, Skeleton } from 'antd'
import ChartComponent from './chart'
import TopGroupAList from './top-list'
import { ReportContext } from '../../contexts/reportContext'
import { useMediaQuery } from 'react-responsive'

const { Title } = Typography

const labelMap = {
    aboveOrEqualTo8: '≥ 8',
    from6ToUnder8: '6 ≤ points < 8',
    from4ToUnder6: '4 ≤ points < 6',
    under4: '< 4',
}

const Report: React.FC = () => {
    const {
        reportState: { statisticReport: statisticReportData, topListReport: topListReportData },
    } = useContext(ReportContext)
    const [selectedSubject, setSelectedSubject] = useState('total')
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const chartData = () => {
        const subjectStats = statisticReportData?.statistics.find((s) => s.subject === selectedSubject)
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
            <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                    <Title level={4} style={{ marginBottom: 20, textAlign: isMobile ? 'center' : 'left' }}>
                        {selectedSubject.replace('_', ' ').toUpperCase()} Score Statistics
                    </Title>

                    <Skeleton active loading={!statisticReportData}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: isMobile ? 'center' : 'flex-start',
                            }}
                        >
                            <Select
                                showSearch
                                placeholder='Select a subject'
                                style={{ width: isMobile ? '100%' : 200, marginBottom: 20 }}
                                value={selectedSubject}
                                onChange={setSelectedSubject}
                                options={statisticReportData?.subject.map((subject: String) => ({
                                    value: subject,
                                    label: subject.replace('_', ' ').toUpperCase(),
                                }))}
                            />
                            <ChartComponent data={chartData()} />
                        </div>
                    </Skeleton>
                </Col>

                <Col xs={24} md={12}>
                    <Title level={4} style={{ marginBottom: 20, textAlign: isMobile ? 'center' : 'left' }}>
                        Top 10 Group A Students
                    </Title>

                    <Skeleton active loading={!topListReportData || topListReportData.length === 0}>
                        {topListReportData && topListReportData.length > 0 && (
                            <TopGroupAList data={topListReportData} />
                        )}
                    </Skeleton>
                </Col>
            </Row>
        </Card>
    )
}

export default Report
