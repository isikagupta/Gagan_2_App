import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import
{
    Box,
    Tabs,
    Tab,
    Typography,
    TextField,
    Button,
    IconButton,
    Radio,
    RadioGroup,
    FormControlLabel,
    Paper,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

interface VesselConditions
{
    draftAftPeak: string;
    draftForePeak: string;
    gm: string;
    heading: string;
    speed: string;
    maxAllowedRoll: string;
}

interface SeaStateData
{
    meanWaveDirection: string;
    significantWaveHeight: string;
    wavePeriod: string;
    wavePeriodType: string;
}

interface LocationState
{
    activeTab?: string;
    vesselConditions?: Partial<VesselConditions>;
    seaState?: Partial<SeaStateData>;
}

const Project: React.FC = () =>
{
    const location = useLocation();
    const state = location.state as LocationState | null;
    const initialTab = state?.activeTab || 'project';
    const [ activeTab, setActiveTab ] = useState(initialTab === 'input' ? 1 : 0);
    const [ caseId, setCaseId ] = useState('');
    const [ deleteCaseId, setDeleteCaseId ] = useState('');
    const [ reportType, setReportType ] = useState('current');

    const [ vesselConditions, setVesselConditions ] = useState<VesselConditions>({
        draftAftPeak: state?.vesselConditions?.draftAftPeak || '',
        draftForePeak: state?.vesselConditions?.draftForePeak || '',
        gm: state?.vesselConditions?.gm || '',
        heading: state?.vesselConditions?.heading || '',
        speed: state?.vesselConditions?.speed || '',
        maxAllowedRoll: state?.vesselConditions?.maxAllowedRoll || '',
    });

    const [ seaStateData, setSeaStateData ] = useState<SeaStateData>({
        meanWaveDirection: state?.seaState?.meanWaveDirection || '',
        significantWaveHeight: state?.seaState?.significantWaveHeight || '',
        wavePeriod: state?.seaState?.wavePeriod || '',
        wavePeriodType: '',
    });

    const handleVesselChange = (field: keyof VesselConditions) => (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setVesselConditions(prev => ({ ...prev, [ field ]: e.target.value }));
    };

    const handleSeaStateChange = (field: keyof SeaStateData) => (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setSeaStateData(prev => ({ ...prev, [ field ]: e.target.value }));
    };

    const vesselConditionsConfig = [
        { label: 'Draft Aft Peak', field: 'draftAftPeak' as keyof VesselConditions, unit: '[m]', range: 'value range [0-40 m]' },
        { label: 'Draft Fore Peak', field: 'draftForePeak' as keyof VesselConditions, unit: '[m]', range: 'value range [0-40 m]' },
        { label: 'GM', field: 'gm' as keyof VesselConditions, unit: '[m]', range: 'value range [0-20 m]' },
        { label: 'Heading', field: 'heading' as keyof VesselConditions, unit: '[degree]', range: '0 absolute from the North' },
        { label: 'Speed', field: 'speed' as keyof VesselConditions, unit: '[kt]', range: 'value range [0-30 kt]' },
        { label: 'Max Allowed Roll', field: 'maxAllowedRoll' as keyof VesselConditions, unit: '[degree]', range: 'value range [0-35 degree]' },
    ];

    const seaStateConfig = [
        { label: 'Mean Wave Direction', field: 'meanWaveDirection' as keyof SeaStateData, unit: '[degree]', range: '0 absolute from the North in incoming direction' },
        { label: 'Significant Wave Height', field: 'significantWaveHeight' as keyof SeaStateData, unit: '[m]', range: 'value range [0-20 m]' },
    ];

    const wavePeriodOptions = [
        { value: '3', label: '3 s' },
        { value: '4', label: '4 s' },
        { value: '5', label: '5 s' },
        { value: '6', label: '6 s' },
        { value: '7', label: '7 s' },
        { value: '8', label: '8 s' },
        { value: '9', label: '9 s' },
        { value: '10', label: '10 s' },
        { value: '11', label: '11 s' },
        { value: '12', label: '12 s' },
        { value: '13', label: '13 s' },
        { value: '14', label: '14 s' },
        { value: '15', label: '15 s' },
    ];

    const handleWavePeriodTypeChange = (event: SelectChangeEvent) => {
        const value = event.target.value;
        setSeaStateData(prev => ({ ...prev, wavePeriodType: value, wavePeriod: value }));
    };

    const savedCases = [
        { id: '100316', color: '#4caf50' },
        { id: '203495', color: '#4caf50' },
        { id: '341197', color: '#4caf50' },
        { id: '202325', color: '#e91e63' },
        { id: '281130', color: '#e91e63' },
        { id: '800490', color: '#e91e63' },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                background: 'url(src/assets/Homebg.png) no-repeat center center',
                backgroundSize: 'cover',
                p: 3,
                gap: 3,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    width: '440px',
                    minWidth: '440px',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                }}
            >
                <Tabs
                    value={activeTab}
                    onChange={(_e, newValue) => setActiveTab(newValue)}
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                        bgcolor: 'white',
                        '& .MuiTab-root': {
                            textTransform: 'none',
                            fontSize: '0.875rem',
                            fontWeight: 500,
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

                <Box
                    sx={{
                        flex: 1,
                        p: 2,
                        overflowY: 'auto',
                        bgcolor: '#f5f7fa',
                    }}
                >
                    {activeTab === 1 && (
                        <>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: '#333' }}>
                                    Vessel Operation Conditions
                                </Typography>
                                <Paper sx={{ p: 2, border: '1px solid #e0e0e0' }}>
                                    {vesselConditionsConfig.map((item, index) => (
                                        <Box key={index} sx={{ mb: index < vesselConditionsConfig.length - 1 ? 1 : 0 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                                                <Typography variant="body2" sx={{ flex: 1, fontWeight: 500 }}>
                                                    {item.label}
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <CheckCircleIcon sx={{ fontSize: 16, color: vesselConditions[ item.field ] ? '#4caf50' : '#ccc' }} />
                                                    <TextField
                                                        size="small"
                                                        value={vesselConditions[ item.field ]}
                                                        onChange={handleVesselChange(item.field)}
                                                        InputProps={{
                                                            endAdornment: (
                                                                <Typography variant="caption" sx={{ color: '#666' }}>
                                                                    {item.unit}
                                                                </Typography>
                                                            ),
                                                            sx: { width: '120px', fontSize: '0.85rem' },
                                                        }}
                                                        sx={{
                                                            '& .MuiInputBase-input': {
                                                                textAlign: 'center',
                                                                fontSize: '0.85rem',
                                                            },
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                            {item.range && (
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        display: 'block',
                                                        color: '#999',
                                                        fontStyle: 'italic',
                                                        textAlign: 'right',
                                                        fontSize: '0.65rem',
                                                    }}
                                                >
                                                    {item.range}
                                                </Typography>
                                            )}
                                        </Box>
                                    ))}
                                </Paper>
                            </Box>

                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: '#333' }}>
                                    Sea State
                                </Typography>
                                <Paper sx={{ p: 2, border: '1px solid #e0e0e0' }}>
                                    {seaStateConfig.map((item, index) => (
                                        <Box key={index} sx={{ mb: 1 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                                                <Typography variant="body2" sx={{ flex: 1, fontWeight: 500 }}>
                                                    {item.label}
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <CheckCircleIcon sx={{ fontSize: 16, color: seaStateData[ item.field ] ? '#4caf50' : '#ccc' }} />
                                                    <TextField
                                                        size="small"
                                                        value={seaStateData[ item.field ]}
                                                        onChange={handleSeaStateChange(item.field)}
                                                        InputProps={{
                                                            endAdornment: (
                                                                <Typography variant="caption" sx={{ color: '#666' }}>
                                                                    {item.unit}
                                                                </Typography>
                                                            ),
                                                            sx: { width: '120px', fontSize: '0.85rem' },
                                                        }}
                                                        sx={{
                                                            '& .MuiInputBase-input': {
                                                                textAlign: 'center',
                                                                fontSize: '0.85rem',
                                                            },
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                            {item.range && (
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        display: 'block',
                                                        color: '#999',
                                                        fontStyle: 'italic',
                                                        textAlign: 'right',
                                                        fontSize: '0.65rem',
                                                    }}
                                                >
                                                    {item.range}
                                                </Typography>
                                            )}
                                        </Box>
                                    ))}
                                    <Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                                            <Select
                                                size="small"
                                                value={seaStateData.wavePeriodType}
                                                onChange={handleWavePeriodTypeChange}
                                                displayEmpty
                                                sx={{
                                                    flex: 1,
                                                    maxWidth: '180px',
                                                    fontSize: '0.85rem',
                                                    fontWeight: 500,
                                                    '& .MuiSelect-select': {
                                                        py: 0.5,
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#e0e0e0',
                                                    },
                                                }}
                                                renderValue={() => 'Wave Period'}
                                            >
                                                {wavePeriodOptions.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <CheckCircleIcon sx={{ fontSize: 16, color: seaStateData.wavePeriod ? '#4caf50' : '#ccc' }} />
                                                <TextField
                                                    size="small"
                                                    value={seaStateData.wavePeriod}
                                                    onChange={handleSeaStateChange('wavePeriod')}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <Typography variant="caption" sx={{ color: '#666' }}>
                                                                [s]
                                                            </Typography>
                                                        ),
                                                        sx: { width: '120px', fontSize: '0.85rem' },
                                                    }}
                                                    sx={{
                                                        '& .MuiInputBase-input': {
                                                            textAlign: 'center',
                                                            fontSize: '0.85rem',
                                                        },
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Box>

                            <Box>
                                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: '#333' }}>
                                    Case Files
                                </Typography>
                                <Paper sx={{ p: 2, border: '1px solid #e0e0e0' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                                        <Typography variant="body2" sx={{ minWidth: '120px', fontSize: '0.8rem' }}>
                                            Save to case ID
                                        </Typography>
                                        <TextField
                                            size="small"
                                            value={caseId}
                                            onChange={(e) => setCaseId(e.target.value)}
                                            sx={{ flex: 1, fontSize: '0.85rem' }}
                                        />
                                        <IconButton size="small" sx={{ bgcolor: '#28a745', color: 'white', '&:hover': { bgcolor: '#218838' } }}>
                                            <SaveIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Typography variant="body2" sx={{ minWidth: '120px', fontSize: '0.8rem' }}>
                                            Delete saved case
                                        </Typography>
                                        <TextField
                                            size="small"
                                            value={deleteCaseId}
                                            onChange={(e) => setDeleteCaseId(e.target.value)}
                                            placeholder="Enter case ID"
                                            sx={{ flex: 1, fontSize: '0.85rem' }}
                                        />
                                        <IconButton size="small" sx={{ border: '1px solid #ddd', '&:hover': { borderColor: '#dc3545', color: '#dc3545' } }}>
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Paper>
                            </Box>
                        </>
                    )}
                </Box>
            </Paper>

            <Paper
                elevation={3}
                sx={{
                    flex: 1,
                    maxWidth: '1650px',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                }}
            >
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
                        <Typography
                            sx={{
                                display: 'inline-block',
                                py: 1.5,
                                px: 2,
                                color: '#2196f3',
                                fontSize: '0.875rem',
                                fontWeight: 1000,
                                borderBottom: '5px solid #2196f3',
                            }}
                        >
                            Plot Area
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            flex: 1,
                            minHeight: '400px',
                            bgcolor: '#576574',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 4,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                left: '1rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '0.85rem',
                                    fontWeight: 500,
                                    writingMode: 'vertical-rl',
                                    transform: 'rotate(180deg)',
                                }}
                            >
                                Roll [deg]
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '300px' }}>
                                {[ 30, 25, 20, 15, 10, 5, 0 ].map((val) => (
                                    <Typography key={val} sx={{ color: 'white', fontSize: '0.75rem' }}>
                                        {val}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>

                        <Box className="polar-chart-container">
                            <Box className="polar-chart">
                                <Typography className="compass-label north">N</Typography>
                                <Typography className="compass-label east">E</Typography>
                                <Typography className="compass-label south">S</Typography>
                                <Typography className="compass-label west">W</Typography>
                            </Box>
                        </Box>

                        <Typography
                            sx={{
                                position: 'absolute',
                                left: '4rem',
                                top: '50%',
                                transform: 'translateY(-50%) rotate(-90deg)',
                                color: 'white',
                                fontSize: '0.8rem',
                            }}
                        >
                            Max roll [deg]
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ bgcolor: '#f8f9fa', p: 2, borderTop: 1, borderColor: 'divider' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                        <FolderIcon sx={{ color: '#666' }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            Saved Cases
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <IconButton size="small" sx={{ bgcolor: 'white', border: '1px solid #ddd' }}>
                            <ChevronLeftIcon />
                        </IconButton>
                        <Box sx={{ display: 'flex', gap: 2, flex: 1, overflowX: 'auto', py: 1 }}>
                            {savedCases.map((item, index) => (
                                <Paper
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 1,
                                        p: 1.5,
                                        minWidth: '80px',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            borderColor: '#2196f3',
                                            boxShadow: 2,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '30px',
                                            height: '24px',
                                            bgcolor: item.color,
                                            borderRadius: 1,
                                        }}
                                    />
                                    <Typography variant="caption">{item.id}</Typography>
                                </Paper>
                            ))}
                        </Box>
                        <IconButton size="small" sx={{ bgcolor: 'white', border: '1px solid #ddd' }}>
                            <ChevronRightIcon />
                        </IconButton>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        borderTop: 1,
                        borderColor: 'divider',
                    }}
                >
                    <Box sx={{ bgcolor: '#dc3545', color: 'white', px: 1, py: 0.5, borderRadius: 1, fontSize: '0.7rem', fontWeight: 600, ml: 'auto' }}>
                        <PictureAsPdfIcon sx={{ fontSize: 16, mr: 0.5 }} />
                        PDF
                    </Box>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: '#dc3545',
                            px: 4,
                            py: 1.25,
                            textTransform: 'none',
                            fontWeight: 600,
                            '&:hover': {
                                bgcolor: '#c82333',
                                transform: 'translateY(-1px)',
                                boxShadow: '0 4px 8px rgba(220, 53, 69, 0.3)',
                            },
                        }}
                    >
                        Generate Report
                    </Button>
                    <RadioGroup
                        row
                        value={reportType}
                        onChange={(e) => setReportType(e.target.value)}
                        sx={{ gap: 3 }}
                    >
                        <FormControlLabel value="current" control={<Radio size="small" />} label="Current Case" sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.85rem' } }} />
                        <FormControlLabel value="all" control={<Radio size="small" />} label="All Cases" sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.85rem' } }} />
                    </RadioGroup>
                </Box>
            </Paper>
        </Box>
    );
};

export default Project;
