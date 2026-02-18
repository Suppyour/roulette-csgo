import React, { ReactNode } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Navbar from './Navbar';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <Navbar />
            <Container component="main" maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
                {children}
            </Container>
            {/* Optional Footer can be added here */}
        </Box>
    );
};

export default MainLayout;
