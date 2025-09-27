import React from 'react';

const MainMenu = ({ onPlay }) => {
    return (
        <div style={{
            minHeight: '100vh',
            background: '#e6f2ff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h1 style={{ color: '#1a237e', marginBottom: '2rem', fontSize: '3rem' }}>
                Code Race
            </h1>
            <button
                onClick={onPlay}
                style={{
                    padding: '1rem 2.5rem',
                    fontSize: '1.25rem',
                    background: '#ffffff',
                    color: '#1976d2',
                    border: '2px solid #1976d2',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                }}
            >
                Play
            </button>
        </div>
    );
};

export default MainMenu;