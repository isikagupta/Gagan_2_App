import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import absLogo from '../assets/ABS_Logo.png';

const Home: React.FC = () =>
{
    const navigate = useNavigate();
    const [ activeTab, setActiveTab ] = useState('project');
    const [ selectedFolder ] = useState('sample');
    const [ uploadedFile ] = useState('proll.cfg');
    const [ uploadStatus ] = useState('File Successfully Uploaded');

    const handleLoadControlFile = () =>
    {
        console.log('Load control file clicked');
    };

    const handleViewUserInput = () =>
    {
        // Navigate to Project page with input tab active
        navigate('/project', { state: { activeTab: 'input' } });
    };

    const handleTabClick = (tab: string) =>
    {
        if (tab === 'input')
        {
            // Navigate to Project page when User Data Input tab is clicked
            navigate('/project', { state: { activeTab: 'input' } });
        } else
        {
            setActiveTab(tab);
        }
    };

    return (
        <div className="home-container">
            <div className="home-content">
                {/* Main Title */}
                <div className="title-section">
                    <h1 className="main-title">
                        Welcome to <img src={absLogo} alt="ABS Logo" className="abs-logo-img" /> | PROLL App
                    </h1>
                </div>

                {/* Project Card */}
                <div className="project-card">
                    {/* Tabs */}
                    <div className="card-tabs">
                        <button
                            className={`tab ${activeTab === 'project' ? 'active' : ''}`}
                            onClick={() => handleTabClick('project')}
                        >
                            Project
                        </button>
                        <button
                            className={`tab ${activeTab === 'input' ? 'active' : ''}`}
                            onClick={() => handleTabClick('input')}
                        >
                            User Data Input
                        </button>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'project' && (
                        <div className="card-body">
                            <h3 className="section-title">Load Project File</h3>

                            {/* Folder Item */}
                            <div className="file-row">
                                <div className="file-item">
                                    <span className="folder-icon">📁</span>
                                    <span className="file-name">{selectedFolder}</span>
                                    <span className="arrow-icon">›</span>
                                </div>
                            </div>

                            {/* File Item with Button */}
                            <div className="file-row">
                                <div className="file-item">
                                    <span className="file-icon">📄</span>
                                    <span className="file-name">{uploadedFile}</span>
                                </div>
                                <button
                                    className="load-control-btn"
                                    onClick={handleLoadControlFile}
                                >
                                    Load Control File
                                </button>
                            </div>

                            {/* Status Message */}
                            <div className="status-message">
                                <span className="status-text">{uploadStatus}</span>
                                <span className="status-icon">✓</span>
                            </div>

                            {/* View User Data Input Button */}
                            <div className="button-footer">
                                <button
                                    className="view-input-btn"
                                    onClick={handleViewUserInput}
                                >
                                    View User Data Input
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
