import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Navbar: React.FC = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 800, color: 'error.main', letterSpacing: 2, fontFamily: 'Monospace' }}>
                    OBMAN:ROULETTE
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>


                    {/* Notifications */}
                    <IconButton size="large" color="inherit">
                        <Badge badgeContent={3} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    {/* User Profile */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
                        <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
                            User123
                        </Typography>
                        <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>U</Avatar>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
