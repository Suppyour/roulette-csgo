import React, { ReactNode } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
    children: ReactNode;
}

// Define keyframes for the background animation
const animatedBackground = `
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            // Animated Background
            background: 'linear-gradient(-45deg, #0f0c29, #302b63, #24243e)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
        }}>
            <style>{animatedBackground}</style>
            <CssBaseline />

            {/* Overlay pattern for texture */}
            <Box sx={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                opacity: 0.1,
                backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <Navbar />

            <Container component="main" maxWidth="lg" sx={{ flexGrow: 1, py: 4, zIndex: 1, position: 'relative' }}>
                {children}
            </Container>

            <Footer />
        </Box>
    );
};

export default MainLayout;
