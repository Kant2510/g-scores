import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ChartData {
    level: string
    count: string | number
}

const ChartComponent: React.FC<{ data: ChartData[] }> = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data}>
                <XAxis dataKey='level' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='count' fill='#087031ff' />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default ChartComponent
