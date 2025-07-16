import { Row, Col, Card } from 'antd'
import { Link, Outlet } from 'react-router'

const Dashboard: React.FC = () => {
    return (
        <div>
            <Row gutter={[16, 16]} style={{ marginBottom: '20px', width: '60%', margin: 'auto' }}>
                <Col span={12}>
                    <Link
                        to={'/scores'}
                        style={
                            {
                                // color: 'black',
                                // background: '#ffffffff',
                                // border: 'none',
                                // borderRadius: '10px',
                                // marginBottom: '12px',
                                // padding: '10px 15px',
                                // cursor: 'pointer',
                                // fontSize: '16px',
                                // textAlign: 'left',
                                // textDecoration: 'none',
                            }
                        }
                    >
                        <Card title='🔎 Search Student Scores' style={{ maxWidth: '80%', margin: 'auto' }}>
                            <p>Search for student scores by registration number.</p>
                        </Card>
                    </Link>
                </Col>
                <Col span={12}>
                    <Link to={'/reports'}>
                        <Card title='📚 Student Score Report' style={{ maxWidth: '80%', margin: 'auto' }}>
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
