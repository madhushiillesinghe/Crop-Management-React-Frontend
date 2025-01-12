import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store.ts';
import MonitoringLogAddButton from "../componet/moniteringLogs/button/LogAddButton.tsx";
import MonitoringLogForm from "../componet/moniteringLogs/form/LogForm.tsx";
import MonitoringLogList from "../componet/moniteringLogs/LogTable.tsx";


const MonitoringLogPage: React.FC = () => {
    const showForm = useSelector((state: RootState) => state.monitoringLog.showForm);

    return (
        <div>
            <h1>Monitoring Log Management</h1>
            <MonitoringLogAddButton />
            {showForm && <MonitoringLogForm />}
            <MonitoringLogList />
        </div>
    );
};

export default MonitoringLogPage;
