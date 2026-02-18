import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box component="footer" sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            bgcolor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(5px)'
        }}>
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center">
                    Собственность Suppyour, все что вы выбиваете, необходимо переводить в трейд{' '}
                    <Link
                        href="https://steamcommunity.com/id/xxaccax/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: '#FFC857', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                    >
                        https://steamcommunity.com/id/xxaccax/
                    </Link>
                    {' '}сюда
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
