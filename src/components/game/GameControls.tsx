import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';

interface GameControlsProps {
    onSpin: () => void;
    isSpinning: boolean;
}

const GameControls: React.FC<GameControlsProps> = ({ onSpin, isSpinning }) => {
    // Fixed price for "Case Opening"
    const CASE_PRICE = 250; // Changed to typical ruble price or just generic number

    return (
        <Box sx={{ width: '100%', maxWidth: '600px', mx: 'auto', p: 0, px: 2 }}>
            <Box sx={{
                bgcolor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4px',
                p: 4,
                textAlign: 'center',
                position: 'relative',
                boxShadow: '0 0 30px rgba(0,0,0,0.5)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -1, left: -1, width: 20, height: 20,
                    borderTop: '2px solid #6C5DD3',
                    borderLeft: '2px solid #6C5DD3'
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -1, right: -1, width: 20, height: 20,
                    borderBottom: '2px solid #6C5DD3',
                    borderRight: '2px solid #6C5DD3'
                }
            }}>
                <Stack spacing={3} alignItems="center">
                    <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 4, fontSize: '0.9rem' }}>
                        КЕЙС: "SCAM 2026"
                    </Typography>

                    <Typography variant="h3" sx={{
                        fontWeight: 800,
                        color: '#fff',
                        textShadow: '0 0 10px rgba(255,255,255,0.3)'
                    }}>
                        {CASE_PRICE} ₽
                    </Typography>

                    <Button
                        fullWidth
                        variant="contained"
                        disabled={isSpinning}
                        onClick={onSpin}
                        startIcon={!isSpinning && <LockOpenIcon />}
                        sx={{
                            height: '64px',
                            fontSize: '1.2rem',
                            fontWeight: 800,
                            letterSpacing: '2px',
                            background: 'linear-gradient(45deg, #6C5DD3 30%, #8B7FE8 90%)',
                            border: 0,
                            boxShadow: '0 3px 5px 2px rgba(108, 93, 211, .3)',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #5b4cc4 30%, #7A6FD0 90%)',
                                transform: 'scale(1.02)',
                                boxShadow: '0 0 20px rgba(108, 93, 211, 0.6)',
                                letterSpacing: '4px',
                            },
                            '&:disabled': {
                                background: '#333',
                                color: '#666'
                            }
                        }}
                    >
                        {isSpinning ? 'ОТКРЫВАЕМ...' : 'ОТКРЫТЬ КЕЙС'}
                    </Button>

                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', opacity: 0.7 }}>
                        <Typography variant="caption" color="text.secondary">
                            Содержит случайные предметы. Возврату не подлежит.
                        </Typography>
                    </Box>

                </Stack>
            </Box>
        </Box>
    );
};

export default GameControls;
