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

    const dataWithKeys = scoreData.map((item, index) => ({
        ...item,
        registration_number: item.registration_number || 'N/A', // Ensure registration number is present
        key: index + 1, // Assign a unique key for each row
    }))

    return (
        <Table dataSource={dataWithKeys} columns={columns} scroll={{ x: 'max-content' }} pagination={false} bordered />
    )
}

export default ScoreDetailsTable
