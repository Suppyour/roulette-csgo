import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 800, color: 'error.main', letterSpacing: 2, fontFamily: 'Monospace' }}>
                    OBMAN:ROULETTE
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {/* Balance Display */}
                    <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2, px: 2, py: 0.5 }}>
                        <AccountBalanceWalletIcon color="secondary" sx={{ mr: 1 }} />
                        <Typography variant="body1" fontWeight="bold">
                            $1,250.00
                        </Typography>
                    </Box>

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
