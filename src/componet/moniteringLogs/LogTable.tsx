import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "../../store/Store.ts";
import {deleteMonitoringLog, setCurrentLogCode, toggleMonitoringLogForm} from "../../reducer/MoniteringLogReducer.ts";
import "../../css/componet/Log.css"
import {FaBook, FaEdit, FaTrashAlt} from "react-icons/fa";


const MonitoringLogList: React.FC = () => {
    const dispatch = useDispatch();
    const monitoringLogs = useSelector((state: RootState) => state.monitoringLog.monitoringLogs);

    const handleEdit = (logCode: string) => {
        dispatch(setCurrentLogCode(logCode));
        dispatch(toggleMonitoringLogForm()); // Show the form when editing
    };

    const handleDelete = (logCode: string) => {
        dispatch(deleteMonitoringLog(logCode));
    };

    return (
        <div className="monitoring-log-list">
            <table className="monitoring-log-table">
                <thead>
                <tr>
                    <th>Log Code</th>
                    <th>Observation</th>
                    <th>Field Code</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {monitoringLogs.map((log) => (
                    <tr key={log.logCode}>
                        <td>{log.logCode}</td>
                        <td>{log.observation}</td>
                        <td>{log.fieldCode}</td>
                        <td>
                            <button onClick={() => handleEdit(log.logCode)}><FaEdit/>
                            </button>
                            <button onClick={() => handleDelete(log.logCode)}><FaTrashAlt/></button>
                            <button onClick={() => handleEdit(log.logCode)}><FaBook/></button>

                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MonitoringLogList;
