import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';

interface GameControlsProps {
    onSpin: () => void;
    isSpinning: boolean;
}

const GameControls: React.FC<GameControlsProps> = ({ onSpin, isSpinning }) => {
    // Fixed price for "Case Opening"
    const CASE_PRICE = 2.50;

    return (
        <Box sx={{ width: '100%', maxWidth: '600px', mx: 'auto', p: 0 }}>
            <Box sx={{
                bgcolor: 'rgba(0,0,0,0.4)',
                border: '1px solid #333',
                p: 3,
                textAlign: 'center',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -1, left: -1, width: 10, height: 10,
                    borderTop: '2px solid #6C5DD3',
                    borderLeft: '2px solid #6C5DD3'
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -1, right: -1, width: 10, height: 10,
                    borderBottom: '2px solid #6C5DD3',
                    borderRight: '2px solid #6C5DD3'
                }
            }}>
                <Stack spacing={2} alignItems="center">
                    <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 3 }}>
                        CASE: "SCAM 2026"
                    </Typography>

                    <Typography variant="h3" sx={{ fontWeight: 800, color: '#fff' }}>
                        ${CASE_PRICE.toFixed(2)}
                    </Typography>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={isSpinning}
                        onClick={onSpin}
                        startIcon={!isSpinning && <LockOpenIcon />}
                        sx={{
                            height: '60px',
                            fontSize: '1.2rem',
                            fontWeight: 800,
                            letterSpacing: '2px',
                            bgcolor: '#6C5DD3',
                            transition: 'all 0.2s',
                            '&:hover': {
                                bgcolor: '#5b4cc4',
                                letterSpacing: '4px', // Cool expansion effect
                            }
                        }}
                    >
                        {isSpinning ? 'OPENING...' : 'OPEN CASE'}
                    </Button>

                    <Typography variant="caption" color="text.secondary">
                        Contains random items. No refunds.
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
};

export default GameControls;
