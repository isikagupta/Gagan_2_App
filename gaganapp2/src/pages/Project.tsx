import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Project.css';

const Project: React.FC = () =>
{
    const location = useLocation();
    const initialTab = (location.state as { activeTab?: string })?.activeTab || 'project';
    const [ activeTab, setActiveTab ] = useState(initialTab);
    const [ caseId, setCaseId ] = useState('170385');

    // Sample data
    const vesselConditions = [
        { label: 'Draft Aft Peak', value: 10, unit: '[m]', range: 'value range [0-40 m]' },
        { label: 'Draft Fore Peak', value: 10, unit: '[m]', range: 'value range [0-40 m]' },
        { label: 'GM', value: 3, unit: '[m]', range: 'value range [0-20 m]' },
        { label: 'Heading', value: 18, unit: '[degree]', range: '0 absolute from the North' },
        { label: 'Speed', value: 12, unit: '[kt]', range: 'value range [0-30 kt]' },
        { label: 'Max Allowed Roll', value: 20, unit: '[degree]', range: 'value range [0-35 degree]' }
    ];

    const seaState = [
        { label: 'Mean Wave Direction', value: 130, unit: '[degree]', range: '0 absolute from the North in incoming direction' },
        { label: 'Significant Wave Height', value: 5, unit: '[m]', range: 'value range [0-20 m]' },
        { label: 'Wave Period', value: 10, unit: '[s]', range: '' }
    ];

    const savedCases = [
        { id: '100316', color: 'green' },
        { id: '203495', color: 'green' },
        { id: '341197', color: 'green' },
        { id: '202325', color: 'pink' },
        { id: '281130', color: 'pink' },
        { id: '800490', color: 'pink' }
    ];

    return (
        <div className="project-container">
            {/* Left Sidebar */}
            <div className="project-sidebar">
                {/* Tabs at top */}
                <div className="project-tabs">
                    <button
                        className={`project-tab ${activeTab === 'project' ? 'active' : ''}`}
                        onClick={() => setActiveTab('project')}
                    >
                        Project
                    </button>
                    <button
                        className={`project-tab ${activeTab === 'input' ? 'active' : ''}`}
                        onClick={() => setActiveTab('input')}
                    >
                        User Data Input
                    </button>
                </div>

                {/* Sidebar Content - Changes based on active tab */}
                <div className="sidebar-content">
                    {/* USER DATA INPUT TAB CONTENT */}
                    {activeTab === 'input' && (
                        <>
                            {/* Vessel Operation Conditions */}
                            <div className="section">
                                <h3 className="section-title">Vessel Operation Conditions</h3>
                                <div className="section-content">
                                    {vesselConditions.map((item, index) => (
                                        <div key={index} className="input-row-wrapper">
                                            <div className="input-row">
                                                <label className="input-label">{item.label}</label>
                                                <div className="input-group">
                                                    <span className="indicator">✓</span>
                                                    <div className="input-with-unit">
                                                        <input
                                                            type="number"
                                                            className="input-field"
                                                            value={item.value}
                                                            readOnly
                                                        />
                                                        <span className="input-unit">{item.unit}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-range">{item.range}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sea State */}
                            <div className="section">
                                <h3 className="section-title">Sea State</h3>
                                <div className="section-content">
                                    {seaState.map((item, index) => (
                                        <div key={index} className="input-row-wrapper">
                                            <div className="input-row">
                                                <label className="input-label">{item.label}</label>
                                                <div className="input-group">
                                                    <span className="indicator">✓</span>
                                                    <div className="input-with-unit">
                                                        <input
                                                            type="number"
                                                            className="input-field"
                                                            value={item.value}
                                                            readOnly
                                                        />
                                                        <span className="input-unit">{item.unit}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {item.range && <div className="input-range">{item.range}</div>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Case Files */}
                            <div className="section">
                                <div className="section-header">
                                    <h3 className="section-title">Case Files</h3>
                                </div>
                                <div className="section-content">
                                    <div className="case-row">
                                        <label className="case-label">Save to case ID</label>
                                        <input
                                            type="text"
                                            className="case-input"
                                            value={caseId}
                                            onChange={(e) => setCaseId(e.target.value)}
                                        />
                                        <button className="save-btn">💾</button>
                                    </div>
                                    <div className="case-row">
                                        <label className="case-label">Delete saved case</label>
                                        <input
                                            type="text"
                                            className="case-input"
                                            placeholder=""
                                            readOnly
                                        />
                                        <button className="delete-btn">🗑️</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* PROJECT TAB CONTENT */}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="project-main">
                {/* Plot Area */}
                <div className="plot-section">
                    <div className="plot-header">
                        <span className="plot-tab">Plot Area</span>
                    </div>
                    <div className="plot-canvas">
                        {/* Y-Axis Label */}
                        <div className="y-axis-container">
                            <div className="y-axis-label">Roll [deg]</div>
                            <div className="y-axis-scale">
                                {[30, 25, 20, 15, 10, 5, 0].map(val => (
                                    <div key={val} className="scale-mark">{val}</div>
                                ))}
                            </div>
                        </div>

                        {/* Polar Chart */}
                        <div className="polar-chart-container">
                            <div className="polar-chart">
                                {/* Compass Labels */}
                                <div className="compass-label north">N</div>
                                <div className="compass-label east">E</div>
                                <div className="compass-label south">S</div>
                                <div className="compass-label west">W</div>

                                {/* Degree Labels */}
                                <div className="degree-label deg-30">30°</div>
                                <div className="degree-label deg-60">60°</div>
                                <div className="degree-label deg-120">120°</div>
                                <div className="degree-label deg-150">150°</div>
                                <div className="degree-label deg-210">210°</div>
                                <div className="degree-label deg-240">240°</div>
                                <div className="degree-label deg-300">300°</div>
                                <div className="degree-label deg-330">330°</div>

                                {/* Speed Labels */}
                                <div className="speed-label speed-25">25kn</div>
                                <div className="speed-label speed-20">20kn</div>
                                <div className="speed-label speed-15">15kn</div>
                                <div className="speed-label speed-10">10kn</div>
                                <div className="speed-label speed-5">5kn</div>
                            </div>
                        </div>

                        {/* Max Roll Label */}
                        <div className="max-roll-label">Max roll [deg]</div>
                    </div>
                </div>

                {/* Saved Cases Section */}
                <div className="saved-cases-section">
                    <div className="saved-cases-header">
                        <span className="folder-icon">📁</span>
                        <h3 className="saved-cases-title">Saved Cases</h3>
                    </div>
                    <div className="saved-cases-content">
                        <button className="nav-arrow">‹</button>
                        <div className="saved-cases-list">
                            {savedCases.map((item, index) => (
                                <div key={index} className="case-tile-box">
                                    <div className={`case-tile-icon ${item.color}`}></div>
                                    <span className="case-tile-id">{item.id}</span>
                                </div>
                            ))}
                        </div>
                        <button className="nav-arrow">›</button>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="footer-actions">
                    <div className="pdf-icon-box">
                        <span>PDF</span>
                    </div>
                    <button className="generate-report-btn">Generate Report</button>
                    <div className="report-options">
                        <label className="radio-label">
                            <input type="radio" name="report" value="current" defaultChecked />
                            <span className="radio-dot"></span>
                            <span>Current Case</span>
                        </label>
                        <label className="radio-label">
                            <input type="radio" name="report" value="all" />
                            <span className="radio-dot"></span>
                            <span>All Cases</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
