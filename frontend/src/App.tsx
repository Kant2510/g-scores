import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import Layout from './layout'
import Dashboard from './components/Dashboard'
import ScoreQuery from './components/ScoreQuery'
import ScoreChart from './components/Report'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/dashboard' replace />} />
                <Route
                    path='/scores'
                    element={
                        <Layout>
                            <ScoreQuery />
                        </Layout>
                    }
                />
                <Route
                    path='/dashboard'
                    element={
                        <Layout>
                            <Dashboard />
                        </Layout>
                    }
                />
                <Route
                    path='/reports'
                    element={
                        <Layout>
                            <ScoreChart />
                        </Layout>
                    }
                />
                <Route
                    path='/settings'
                    element={
                        <Layout>
                            <h1>Settings</h1>
                            {/* Settings content goes here */}
                        </Layout>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
//             />
//         </>
//     )
// }

// export default App
