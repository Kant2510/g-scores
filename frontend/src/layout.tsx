import React from 'react'
import MenuBar from './components/menu-bar'
import TopBanner from './components/top-banner'

import { useMediaQuery } from 'react-responsive'

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    // Breakpoints
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
    // const isDesktop = useMediaQuery({ minWidth: 1024 })

    // Responsive Sidebar Width
    const sidebarWidth = isMobile ? '100vw' : isTablet ? 200 : 320

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw', flexDirection: isMobile ? 'column' : 'row' }}>
            {/* Left Sidebar */}
            <aside
                style={{
                    width: sidebarWidth,
                    background: '#1F6429',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1rem 0',
                    transition: 'width 0.3s ease',
                }}
            >
                <div
                    style={{
                        fontWeight: 'bold',
                        fontSize: isMobile ? 16 : 22,
                        textAlign: 'center',
                        marginBottom: 24,
                    }}
                >
                    G-Scores
                </div>

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
                <TopBanner />
                <main style={{ flex: 1, padding: '2rem', background: '#cae4cbff' }}>{children}</main>
            </div>
        </div>
    )
}

export default Layout
