import { Outlet } from 'react-router'

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* will either be <Home/> or <Settings/> */}
            <Outlet />
        </div>
    )
}
export default Dashboard
