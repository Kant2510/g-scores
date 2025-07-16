import React from 'react'
import { useLocation } from 'react-router'

const TopBanner: React.FC = () => {
    const location = useLocation()

    return (
        <header
            style={{
                height: 60,
                background: '#cae4cbff',
                color: 'black',
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
    )
}

export default TopBanner
