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
                bgcolor: '#0a0a0a',
                backgroundImage: `
                    linear-gradient(rgba(108, 93, 211, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(108, 93, 211, 0.05) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                borderRadius: '8px',
                border: '1px solid #333',
                boxShadow: '0 0 50px rgba(0,0,0,0.8) inset, 0 0 20px rgba(108, 93, 211, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                '&::before': { // Top accent line
                    content: '""',
                    position: 'absolute',
                    top: 0, left: 0, right: 0, height: '2px',
                    background: 'linear-gradient(90deg, transparent, #6C5DD3, transparent)',
                    zIndex: 2
                },
                '&::after': { // Bottom accent line
                    content: '""',
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0, height: '2px',
                    background: 'linear-gradient(90deg, transparent, #6C5DD3, transparent)',
                    zIndex: 2
                }
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
                    width: '2px',
                    bgcolor: '#FFC857',
                    zIndex: 10,
                    boxShadow: '0 0 15px #FFC857',
                    pointerEvents: 'none',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderLeft: '12px solid transparent',
                        borderRight: '12px solid transparent',
                        borderTop: '20px solid #FFC857',
                        filter: 'drop-shadow(0 0 5px #FFC857)'
                    },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderLeft: '12px solid transparent',
                        borderRight: '12px solid transparent',
                        borderBottom: '20px solid #FFC857',
                        filter: 'drop-shadow(0 0 5px #FFC857)'
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
