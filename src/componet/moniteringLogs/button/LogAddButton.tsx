import React from 'react';
import { toggleMonitoringLogForm } from '../../../reducer/MoniteringLogReducer.ts';
import ReusableButton from "../../button/ActionButton.tsx";

const MonitoringLogAddButton: React.FC = () => {
    return <ReusableButton label="Add Monitoring Log" onClickAction={toggleMonitoringLogForm} className="add-monitoring-log-button"></ReusableButton>;
};

export default MonitoringLogAddButton;
