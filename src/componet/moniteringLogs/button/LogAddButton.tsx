import React from 'react';
import { toggleMonitoringLogForm } from '../../../reducer/MoniteringLogReducer.ts';
import ReusableButton from "../../button/ActionButton.tsx";

const MonitoringLogAddButton: React.FC = () => {
    return (
        <div className="flex justify-end"> {}
            <ReusableButton label="Add Monitoring Log" onClickAction={toggleMonitoringLogForm} className="add-monitoring-log-button" />
        </div>
    );
};

export default MonitoringLogAddButton;
