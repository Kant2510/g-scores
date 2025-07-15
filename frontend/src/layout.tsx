import React from 'react'
import { useLocation } from 'react-router'
import MenuBar from './components/menu-bar'

const sidebarWidth = 220
const bannerHeight = 60

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const location = useLocation()

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
            {/* Left Sidebar */}
            <aside
                style={{
                    width: sidebarWidth,
                    background: '#1F6429',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1rem 0',
                }}
            >
                <div style={{ fontWeight: 'bold', fontSize: 22, textAlign: 'center', marginBottom: 24 }}>G-Scores</div>
                {/* Add sidebar items here */}
                <MenuBar
                    items={[
                        { label: 'Dashboard', onClick: () => console.log('Dashboard clicked') },
                        { label: 'Scores', onClick: () => console.log('Scores clicked') },
                        { label: 'Reports', onClick: () => console.log('Reports clicked') },
                        { label: 'Settings', onClick: () => console.log('Settings clicked') },
                    ]}
                />
            </aside>

            {/* Main Area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Top Banner */}
                <header
                    style={{
                        height: bannerHeight,
                        background: '#1976d2',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 2rem',
                        fontSize: 20,
                        fontWeight: 500,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                    }}
                >
                    Welcome to {location.pathname.toUpperCase().substring(1)}!
                </header>

                {/* Info Area */}
                <main style={{ flex: 1, padding: '2rem', background: '#f7f9fb' }}>{children}</main>
            </div>
        </div>
    )
}

export default Layout
