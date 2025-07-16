import React from 'react'
import MenuBar from './components/menu-bar'
import TopBanner from './components/top-banner'

const sidebarWidth = 320

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
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
                    ]}
                />
            </aside>

            {/* Main Area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Top Banner */}
                <TopBanner />

                {/* Info Area */}
                <main style={{ flex: 1, padding: '2rem', background: '#cae4cbff' }}>{children}</main>
            </div>
        </div>
    )
}

export default Layout
