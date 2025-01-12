// Dashboard.tsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h2>Dashboard</h2>
                <ul>
                    <li>
                        <Link to="/dashboard/equipment">Equipment</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/crop">Crop</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/staff">Staff</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/field">Field</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/vehicle">Vehicle</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/logs">Logs</Link>
                    </li>
                </ul>
            </div>

            <div className="main-content">
                {/* The nested components will render here */}
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
