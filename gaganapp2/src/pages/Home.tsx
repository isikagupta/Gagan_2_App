import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import
    {
        Box,
        Card,
        CardContent,
        Typography,
        Button,
        Tabs,
        Tab,
    } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import absLogo from '../assets/ABS_Logo.png';

const Home: React.FC = () =>
{
    const navigate = useNavigate();
    const [ activeTab, setActiveTab ] = useState(0);
    const [ selectedFolder ] = useState('sample');
    const [ uploadedFile ] = useState('proll.cfg');
    const [ uploadStatus ] = useState('File Successfully Uploaded');

    const handleLoadControlFile = () =>
    {
        console.log('Load control file clicked');
    };

    const handleViewUserInput = () =>
    {
        navigate('/project', { state: { activeTab: 'input' } });
    };

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) =>
    {
        if (newValue === 1)
        {
            navigate('/project', { state: { activeTab: 'input' } });
        } else
        {
            setActiveTab(newValue);
        }
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                backgroundImage: 'url(src/assets/Homebg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 4,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '900px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                }}
            >
                {/* Title Section */}
                <Box sx={{ textAlign: 'center', color: 'white', mb: 3 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 400,
                            letterSpacing: 0.5,
                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1,
                        }}
                    >
                        Welcome to{' '}
                        <Box
                            component="img"
                            src={absLogo}
                            alt="ABS Logo"
                            sx={{ height: '40px', width: 'auto' }}
                        />{' '}
                        | PROLL App
                    </Typography>
                </Box>

                {/* Project Card */}
                <Card
                    sx={{
                        width: '100%',
                        maxWidth: '800px',
                        borderRadius: 3,
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    }}
                >
                    {/* Tabs */}
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        sx={{
                            borderBottom: 1,
                            borderColor: 'divider',
                            bgcolor: '#f9f9f9',
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                color: '#999',
                                '&.Mui-selected': {
                                    color: '#2196f3',
                                    fontWeight: 600,
                                },
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#2196f3',
                                height: 3,
                            },
                        }}
                    >
                        <Tab label="Project" />
                        <Tab label="User Data Input" />
                    </Tabs>

                    {/* Card Content */}
                    <CardContent sx={{ p: 4 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 3,
                                fontSize: '1rem',
                                color: '#333',
                                fontWeight: 600,
                            }}
                        >
                            Load Project File
                        </Typography>

                        {/* Folder Item */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                p: 1.5,
                                bgcolor: '#f9f9f9',
                                borderRadius: 1,
                                border: '1px solid #e8e8e8',
                                mb: 2,
                            }}
                        >
                            <FolderIcon sx={{ color: '#2196f3', fontSize: 22 }} />
                            <Typography
                                sx={{
                                    flex: 1,
                                    fontSize: '0.95rem',
                                    color: '#2196f3',
                                    fontWeight: 500,
                                }}
                            >
                                {selectedFolder}
                            </Typography>
                            <ChevronRightIcon sx={{ color: '#999' }} />
                        </Box>

                        {/* File Item with Button */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                p: 1.5,
                                bgcolor: '#f9f9f9',
                                borderRadius: 1,
                                border: '1px solid #e8e8e8',
                                mb: 2,
                            }}
                        >
                            <DescriptionIcon sx={{ color: '#2196f3', fontSize: 22 }} />
                            <Typography
                                sx={{
                                    flex: 1,
                                    fontSize: '0.95rem',
                                    color: '#2196f3',
                                    fontWeight: 500,
                                }}
                            >
                                {uploadedFile}
                            </Typography>
                            <Button
                                variant="outlined"
                                size="small"
                                onClick={handleLoadControlFile}
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '0.85rem',
                                    color: '#666',
                                    borderColor: '#ddd',
                                    '&:hover': {
                                        borderColor: '#999',
                                        bgcolor: '#f5f5f5',
                                    },
                                }}
                            >
                                Load Control File
                            </Button>
                        </Box>

                        {/* Status Message */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 1,
                                p: 1.5,
                                mb: 3,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '0.95rem',
                                    color: '#999',
                                    fontWeight: 500,
                                }}
                            >
                                {uploadStatus}
                            </Typography>
                            <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 20 }} />
                        </Box>

                        {/* View User Data Input Button */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                pt: 2,
                                borderTop: '1px solid #e8e8e8',
                            }}
                        >
                            <Button
                                variant="contained"
                                onClick={handleViewUserInput}
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    px: 4,
                                    py: 1.25,
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)',
                                    },
                                }}
                            >
                                View User Data Input
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default Home;