import React from 'react'
import { Link } from 'react-router'

type MenuItem = {
    label: string
    onClick: () => void
}

type MenuBarProps = {
    items: MenuItem[]
}

const MenuBar: React.FC<MenuBarProps> = ({ items }) => {
    return (
        <nav
            style={{
                display: 'flex',
                flexDirection: 'column',
                // background: '#1F6429',
                padding: '10% 8px 8px',
            }}
        >
            {items.map((item, idx) => (
                // <Link to="/concerts/salt-lake-city">Concerts</Link>
                <Link
                    key={idx}
                    to={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    style={{
                        color: 'black',
                        background: '#ffffffff',
                        border: 'none',
                        borderRadius: '10px',
                        marginBottom: '12px',
                        padding: '10px 15px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        textAlign: 'left',
                        textDecoration: 'none',
                    }}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}

export default MenuBar
