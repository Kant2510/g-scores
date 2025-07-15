import React from 'react'
import { Table } from 'antd'
import { ScoreData } from '../../types/score'

const ScoreDetailsTable: React.FC<{ scoreData: ScoreData[] }> = ({ scoreData }) => {
    const columnsTag = [
        'Registration Number',
        'Math',
        'Physics',
        'Chemistry',
        'Biology',
        'Literature',
        'History',
        'Geography',
        'Civil Education',
        'Foreign Language',
        'Foreign Language Code',
    ]

    const columns = columnsTag.map((title, index) => ({
        title,
        dataIndex: title.toLowerCase().replace(/\s+/g, '_'),
        key: title.toLowerCase().replace(/\s+/g, '_'),
    }))

    return <Table dataSource={scoreData} columns={columns} pagination={false} bordered />
}

export default ScoreDetailsTable
