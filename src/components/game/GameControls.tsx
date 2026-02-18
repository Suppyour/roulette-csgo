import React from 'react';
import { Box, Button } from '@mui/material';

interface GameControlsProps {
    onSpin: () => void;
    isSpinning: boolean;
}

const GameControls: React.FC<GameControlsProps> = ({ onSpin, isSpinning }) => {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            mt: 4
        }}>
            <Button
                variant="contained"
                disabled={isSpinning}
                onClick={onSpin}
                sx={{
                    px: 6,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    color: '#000', // Black text for contrast on yellow
                    bgcolor: '#FFC857', // Yellow
                    borderRadius: '50px', // Rounded/Small feel
                    boxShadow: '0 0 15px rgba(255, 200, 87, 0.4)',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        bgcolor: '#ffcf6b',
                        transform: 'scale(1.05)',
                        boxShadow: '0 0 25px rgba(255, 200, 87, 0.6)',
                    },
                    '&:disabled': {
                        bgcolor: '#333',
                        color: '#666',
                        boxShadow: 'none'
                    }
                }}
            >
                {isSpinning ? 'ОТКРЫВАЕМ...' : 'ОТКРЫТЬ'}
            </Button>
        </Box>
    );
};

export default GameControls;
