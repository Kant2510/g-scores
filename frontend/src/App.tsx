import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import Layout from './layout'
import Dashboard from './components/Dashboard'
import ScoreQuery from './components/ScoreQuery'
import Report from './components/Report'
import ReportContextProvider from './contexts/reportContext'

function App() {
    return (
        <ReportContextProvider>
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
                                <Report />
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
        </ReportContextProvider>
    )
}

export default App
