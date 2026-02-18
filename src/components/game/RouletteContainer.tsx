import React, { ReactNode } from 'react';
import { Box, Paper } from '@mui/material';


interface RouletteContainerProps {
    children: ReactNode;
}

const RouletteContainer: React.FC<RouletteContainerProps> = ({ children }) => {
    return (
        <Paper
            elevation={10}
            sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '900px',
                height: '200px',
                mx: 'auto',
                mb: 4,
                bgcolor: '#0a0a0a', // Darker background
                borderRadius: 0, // Sharp
                border: '1px solid #333',
                borderTop: '2px solid #6C5DD3', // Tech accent
                borderBottom: '2px solid #6C5DD3', // Tech accent
                boxShadow: '0 0 40px rgba(0,0,0,0.8) inset',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center' // Centers the tape
            }}
        >
            {/* Visual Center Marker (The Pointer) */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '4px',
                    bgcolor: 'secondary.main',
                    zIndex: 10,
                    boxShadow: '0 0 15px #FFC857', // Glow effect
                    pointerEvents: 'none',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: -5,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        borderTop: '15px solid #FFC857',
                    },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: -5,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        borderBottom: '15px solid #FFC857',
                    }
                }}
            />

            {/* Fade Gradients for visual depth */}
            <Box sx={{
                position: 'absolute',
                top: 0, bottom: 0, left: 0,
                width: '100px',
                background: 'linear-gradient(90deg, #1a1a1a 0%, transparent 100%)',
                zIndex: 5,
                pointerEvents: 'none'
            }} />
            <Box sx={{
                position: 'absolute',
                top: 0, bottom: 0, right: 0,
                width: '100px',
                background: 'linear-gradient(-90deg, #1a1a1a 0%, transparent 100%)',
                zIndex: 5,
                pointerEvents: 'none'
            }} />

            {/* The actual game logic component goes here */}
            <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                {children}
            </Box>

        </Paper>
    );
};

export default RouletteContainer;
