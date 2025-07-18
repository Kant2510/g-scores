import React from 'react'
import { Table } from 'antd'
import { createStyles } from 'antd-style'
import { TopListReportResponse } from '../../types/report'

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

const TopGroupAList: React.FC<{ data: TopListReportResponse[] }> = ({ data }) => {
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
        <div style={{ overflowY: 'auto' }}>
            <Table
                className={styles.customTable}
                dataSource={dataWithKeys}
                columns={columns}
                scroll={{ x: 'max-content' }}
                style={{ height: 300 }}
                pagination={false}
                bordered
            />
        </div>
    )
}

export default TopGroupAList
