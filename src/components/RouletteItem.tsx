import React from 'react';
import {Paper, Box, Typography} from '@mui/material';
import {IItem} from '../types';

interface Props {
    items: IItem;
}

function RouletteItem({items}: Props) {
    return (
        <Box sx={{ width: '150px', flexShrink: 0, textAlign: 'center' }}>
            <Paper sx={{
                height: 120,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#1e1e1e',
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${items.rarity}44 100%)`,
                borderBottom: `4px solid ${items.rarity}`,
                marginBottom: '8px'
            }}>
                <img src={items.image} style={{ width: '80%' }} />
            </Paper>

            <Typography sx={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>
                {items.name}
            </Typography>
        </Box>

    )
}

export default RouletteItem;