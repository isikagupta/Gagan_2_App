import { Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';

interface SidebarProps
{
    onFilesClick?: () => void;
    onHomeClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFilesClick, onHomeClick }) =>
{
    return (
        <Box
            sx={{
                width: '80px',
                height: '100%',
                bgcolor: '#ffffff',
                borderRight: '2px solid #e0e0e0',
                py: 2,
                boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                left: 0,
                top: 0,
                zIndex: 20,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Button
                    variant="outlined"
                    onClick={onHomeClick}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 0.5,
                        width: '65px',
                        py: 2,
                        px: 1.5,
                        bgcolor: '#f0f0f0',
                        color: '#1e3c72',
                        border: '1.5px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                            bgcolor: '#e8e8e8',
                            borderColor: '#1e3c72',
                            color: '#0d1f3f',
                            transform: 'translateX(2px)',
                            boxShadow: '0 4px 12px rgba(30, 60, 114, 0.15)',
                        },
                    }}
                >
                    <HomeIcon sx={{ fontSize: 24 }} />
                    Home
                </Button>

                <Button
                    variant="outlined"
                    onClick={onFilesClick}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 0.5,
                        width: '65px',
                        py: 2,
                        px: 1.5,
                        bgcolor: '#f0f0f0',
                        color: '#1e3c72',
                        border: '1.5px solid #e0e0e0',
                        borderRadius: '8px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                            bgcolor: '#e8e8e8',
                            borderColor: '#1e3c72',
                            color: '#0d1f3f',
                            transform: 'translateX(2px)',
                            boxShadow: '0 4px 12px rgba(30, 60, 114, 0.15)',
                        },
                    }}
                >
                    <DescriptionIcon sx={{ fontSize: 24 }} />
                    Files
                </Button>
            </Box>
        </Box>
    );
};

export default Sidebar;