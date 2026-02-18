import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { IItem } from '../types';

interface Props {
    items: IItem;
}

function RouletteItem({ items }: Props) {
    return (
        <Box sx={{ width: '160px', flexShrink: 0, textAlign: 'center', p: 1 }}>
            <Paper sx={{
                height: 140,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#151515',
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${items.rarity}44 100%)`,
                border: `1px solid ${items.rarity}44`, // Subtle border
                borderBottom: `4px solid ${items.rarity}`,
                borderRadius: 0, // Sharp
                position: 'relative',
                transition: 'all 0.2s',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 0 15px ${items.rarity}44`,
                    borderColor: items.rarity
                },
                overflow: 'hidden'
            }}>
                <img src={items.image} style={{ width: '85%', filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }} alt={items.name} />
            </Paper>

            <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 600, mt: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {items.name}
            </Typography>
        </Box>

    )
}

export default RouletteItem;