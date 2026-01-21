import { AppBar, Toolbar, Box, IconButton, Typography } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AppsIcon from '@mui/icons-material/Apps';
import logo from '../assets/ABS_Logo.png';

const Header = () =>
{
    return (
        <AppBar
            position="static"
            sx={{
                height: '45px',
                bgcolor: '#012B4F',
                ml: '80px',
                width: 'calc(100% - 80px)',
                boxShadow: 'none',
            }}
        >
            <Toolbar
                sx={{
                    minHeight: '45px !important',
                    height: '45px',
                    px: 3,
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {/* LEFT SIDE */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.75 }}>
                    {/* 9-dot grid icon */}
                    <AppsIcon sx={{ fontSize: 20, opacity: 0.85, color: 'white' }} />

                    {/* ABS LOGO */}
                    <Box
                        component="img"
                        src={logo}
                        alt="ABS"
                        sx={{ height: '24px', width: 'auto' }}
                    />

                    {/* Divider */}
                    <Typography
                        sx={{
                            fontSize: '18px',
                            fontWeight: 400,
                            opacity: 0.75,
                            color: 'white',
                            mt: 0.5,
                        }}
                    >
                        |
                    </Typography>

                    {/* Title */}
                    <Typography
                        sx={{
                            fontSize: '16px',
                            fontWeight: 500,
                            opacity: 0.95,
                            color: 'white',
                            mt: 0.5,
                        }}
                    >
                        PROLL App
                    </Typography>
                </Box>

                {/* RIGHT SIDE */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <IconButton size="small" sx={{ color: 'white', opacity: 0.85 }}>
                        <ChatBubbleOutlineIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: 'white', opacity: 0.85 }}>
                        <SettingsOutlinedIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: 'white', opacity: 0.85 }}>
                        <InfoOutlinedIcon fontSize="small" />
                    </IconButton>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.75,
                            cursor: 'pointer',
                            '&:hover': { opacity: 1 },
                        }}
                    >
                        <PersonOutlineIcon sx={{ fontSize: 20, color: 'white' }} />
                        <Typography sx={{ fontSize: '14px', color: 'white', opacity: 0.9 }}>
                            Login
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;