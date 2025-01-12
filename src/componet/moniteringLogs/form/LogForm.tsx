import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/Store';
import {addMonitoringLog, editMonitoringLog, toggleMonitoringLogForm} from "../../../reducer/MoniteringLogReducer.ts";
import {MoniteringLog} from "../../../model/MoniteringLog.ts";

const MonitoringLogForm: React.FC = () => {
    const dispatch = useDispatch();
    const currentLogCode = useSelector((state: RootState) => state.monitoringLog.currentLogCode);
    const existingLog = useSelector((state: RootState) =>
        state.monitoringLog.monitoringLogs.find((log) => log.logCode === currentLogCode)
    );

    const [logData, setLogData] = useState<MoniteringLog>({
        logCode: existingLog?.logCode || '',
        logDate: existingLog?.logDate || new Date(),
        observation: existingLog?.observation || '',
        fieldCode: existingLog?.fieldCode || '',
        observedImage: existingLog?.observedImage || '',
        staffList: existingLog?.staffList || [],
        cropList: existingLog?.cropList || [],
    });

    useEffect(() => {
        if (existingLog) {
            setLogData({
                logCode: existingLog.logCode,
                logDate: existingLog.logDate,
                observation: existingLog.observation,
                fieldCode: existingLog.fieldCode,
                observedImage: existingLog.observedImage,
                staffList: existingLog.staffList,
                cropList: existingLog.cropList,
            });
        }
    }, [existingLog]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogData({ ...logData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentLogCode) {
            dispatch(editMonitoringLog(logData));
        } else {
            dispatch(addMonitoringLog(logData));
        }
        dispatch(toggleMonitoringLogForm());
    };

    return (
        <form onSubmit={handleSubmit} className="monitoring-log-form">
            <input
                type="text"
                name="logCode"
                placeholder="Log Code"
                value={logData.logCode}
                onChange={handleInputChange}
                required
            />
            <input
                type="date"
                name="logDate"
                placeholder="Log Date"
                value={logData.logDate.toISOString().split('T')[0]}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="observation"
                placeholder="Observation"
                value={logData.observation}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="fieldCode"
                placeholder="Field Code"
                value={logData.fieldCode}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="observedImage"
                placeholder="Observed Image URL"
                value={logData.observedImage}
                onChange={handleInputChange}
            />
            <button type="submit">{currentLogCode ? 'Update Log' : 'Add Log'}</button>
        </form>
    );
};

export default MonitoringLogForm;
