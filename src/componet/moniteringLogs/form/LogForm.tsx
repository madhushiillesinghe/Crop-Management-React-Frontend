import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/Store.ts";
import { MoniteringLog } from "../../../model/MoniteringLog.ts";
import {
    addMonitoringLog,
    editMonitoringLog,
    setCurrentLogCode,
    toggleMonitoringLogForm
} from "../../../reducer/MoniteringLogReducer.ts";
import ReusableForm from "../../Form/CommonForm.tsx";

const MonitoringLogForm: React.FC = () => {
    const dispatch = useDispatch();
    const currentLogCode = useSelector((state: RootState) => state.monitoringLog.currentLogCode);
    const monitoringLogs = useSelector((state: RootState) => state.monitoringLog.monitoringLogs);
    const showForm = useSelector((state: RootState) => state.monitoringLog.showForm);

    const [isEditing, setIsEditing] = useState(false);
    const [formValues, setFormValues] = useState<MoniteringLog>({
        logCode: '',
        logDate: new Date(),
        observation: '',
        fieldCode: '',
        observedImage: '',
        staffList: [],
        cropList: [],
    });

    useEffect(() => {
        if (currentLogCode) {
            const existingLog = monitoringLogs.find((log) => log.logCode === currentLogCode);
            if (existingLog) {
                setFormValues(existingLog);
                setIsEditing(true);
            }
        } else {
            resetForm();
        }
    }, [currentLogCode, monitoringLogs]);

    const resetForm = () => {
        setFormValues({
            logCode: '',
            logDate: new Date(),
            observation: '',
            fieldCode: '',
            observedImage: '',
            staffList: [],
            cropList: [],
        });
        setIsEditing(false);
        dispatch(toggleMonitoringLogForm());
        dispatch(setCurrentLogCode(null));
    };

    const handleSubmit = (values: MoniteringLog) => {
        if (isEditing) {
            dispatch(editMonitoringLog(values));
        } else {
            dispatch(addMonitoringLog({ ...values, logDate: new Date() }));
        }
        resetForm();
    };

    const handleClose = () => {
        resetForm();
    };

    const fields = [
        { name: 'logCode', label: 'Log Code', type: 'text', placeholder: 'Log Code', required: true, disabled: isEditing },
        { name: 'observation', label: 'Observation', type: 'textarea', placeholder: 'Observation', required: true },
        { name: 'fieldCode', label: 'Field Code', type: 'text', placeholder: 'Field Code', required: true },
        { name: 'observedImage', label: 'Observed Image URL', type: 'text', placeholder: 'Observed Image URL' },
    ];

    return (
        <ReusableForm
            initialValues={formValues}
            fields={fields}
            onSubmit={handleSubmit}
            onClose={handleClose}
            isEditing={isEditing}
            showForm={showForm}
        />
    );
};

export default MonitoringLogForm;
