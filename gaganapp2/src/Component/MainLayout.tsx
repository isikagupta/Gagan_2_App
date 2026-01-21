import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout: React.FC = () =>
{
    const handleMenuClick = () =>
    {
        console.log('Files clicked');
    };

    const handleHomeClick = () =>
    {
        console.log('Home clicked');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100vh',
                bgcolor: '#f5f5f5',
            }}
        >
            <Header />
            <Sidebar onFilesClick={handleMenuClick} onHomeClick={handleHomeClick} />

            <Box
                component="main"
                sx={{
                    flex: 1,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    bgcolor: '#f5f5f5',
                    ml: '80px',
                    display: 'flex',
                    flexDirection: 'column',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#e0e0e0',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#999',
                        borderRadius: '4px',
                        '&:hover': {
                            background: '#666',
                        },
                    },
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;