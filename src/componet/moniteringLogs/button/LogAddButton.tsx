import React from 'react';
import { useDispatch } from 'react-redux';
import {toggleMonitoringLogForm} from "../../../reducer/MoniteringLogReducer.ts";

const MonitoringLogAddButton: React.FC = () => {
    const dispatch = useDispatch();

    const handleAddMonitoringLogClick = () => {
        dispatch(toggleMonitoringLogForm());
    };

    return (
        <button onClick={handleAddMonitoringLogClick} className="add-monitoring-log-button">
            Add Monitoring Log
        </button>
    );
};

export default MonitoringLogAddButton;
