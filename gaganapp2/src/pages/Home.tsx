import React, { useState } from 'react';
import './Home.css';
import absLogo from '../assets/ABS_Logo.png';

const Home: React.FC = () =>
{
    const [ activeTab, setActiveTab ] = useState('project');
    const [ selectedFolder, setSelectedFolder ] = useState('sample');
    const [ uploadedFile, setUploadedFile ] = useState('proll.cfg');
    const [ uploadStatus, setUploadStatus ] = useState('File Successfully Uploaded');

    const handleSelectFolder = () =>
    {
        console.log('Select folder clicked');
    };

    const handleLoadControlFile = () =>
    {
        console.log('Load control file clicked');
    };

    const handleViewUserInput = () =>
    {
        console.log('View user input clicked');
    };

    return (
        <div className="home-container">
            <div className="home-content">
                {/* Main Title */}
                <div className="title-section">
                    <h1 className="main-title">Welcome to <img src={absLogo} alt="ABS Logo" className="abs-logo-img" /> | PROLL App</h1>
                </div>

                {/* Project Card */}
                <div className="project-card">
                    {/* Tabs */}
                    <div className="card-tabs">
                        <button
                            className={`tab ${activeTab === 'project' ? 'active' : ''}`}
                            onClick={() => setActiveTab('project')}
                        >
                            Project
                        </button>
                        <button
                            className={`tab ${activeTab === 'input' ? 'active' : ''}`}
                            onClick={() => setActiveTab('input')}
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
                                    {/* <span className="check-icon">✓</span> */}
                                </div>
                            </div>

                            {/* File Item with Button */}
                            <div className="file-row">
                                <div className="file-item">
                                    <span className="file-icon">📄</span>
                                    <span className="file-name">{uploadedFile}</span>
                                    {/* <span className="check-icon">✓</span> */}
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

                    {activeTab === 'input' && (
                        <div className="card-body">
                            <p>User Data Input content coming soon...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
