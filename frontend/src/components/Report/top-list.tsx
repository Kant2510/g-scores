import React from 'react'
import { Table } from 'antd'
import { createStyles } from 'antd-style'

const useStyle = createStyles(({ css }) => {
    return {
        customTable: css`
            .ant-table-container {
                .ant-table-body,
                .ant-table-content {
                    scrollbar-width: thin;
                    scrollbar-color: #eaeaea transparent;
                    scrollbar-gutter: stable;
                }
            }
        `,
    }
})
interface TopGroupAListData {
    registration_number: string
    math: number
    physics: number
    chemistry: number
    total: number
    [key: string]: number | string // Allow additional properties
}

const TopGroupAList: React.FC<{ data: TopGroupAListData[] }> = ({ data }) => {
    const { styles } = useStyle()

    const columnsTag = ['Registration Number', 'Math', 'Physics', 'Chemistry', 'Total']

    const columns = columnsTag.map((title, index) => ({
        title,
        dataIndex: title.toLowerCase().replace(/\s+/g, '_'),
        key: title.toLowerCase().replace(/\s+/g, '_'),
    }))

    const dataWithKeys = data.map((item, index) => ({
        ...item,
        key: index + 1, // Assign a unique key for each row
    }))

    return (
        <Table
            className={styles.customTable}
            dataSource={dataWithKeys}
            columns={columns}
            scroll={{ y: 55 * 5 }}
            pagination={false}
            bordered
        />
    )
}

export default TopGroupAList
