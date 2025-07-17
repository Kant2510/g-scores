import { Row, Col, Card } from 'antd'
import { Link, Outlet } from 'react-router'

const Dashboard: React.FC = () => {
    return (
        <div>
            <Row gutter={[16, 16]} style={{ marginBottom: '20px', width: '100%', maxWidth: '960px', margin: 'auto' }}>
                <Col xs={24} sm={24} md={12}>
                    <Link to={'/scores'} style={{ textDecoration: 'none' }}>
                        <Card title='🔎 Search Student Scores' style={{ margin: 'auto' }}>
                            <p>Search for student scores by registration number.</p>
                        </Card>
                    </Link>
                </Col>

                <Col xs={24} sm={24} md={12}>
                    <Link to={'/reports'} style={{ textDecoration: 'none' }}>
                        <Card title='📚 Student Score Report' style={{ margin: 'auto' }}>
                            <p>This report provides a detailed overview of student scores.</p>
                        </Card>
                    </Link>
                </Col>
            </Row>

            <Outlet />
        </div>
    )
}
export default Dashboard
