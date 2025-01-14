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
import "../../../css/componet/field.css";

const MonitoringLogForm: React.FC = () => {
    const dispatch = useDispatch();
    const currentLogCode = useSelector((state: RootState) => state.monitoringLog.currentLogCode);
    const monitoringLogs = useSelector((state: RootState) => state.monitoringLog.monitoringLogs);
    const showForm = useSelector((state: RootState) => state.monitoringLog.showForm);

    const [formValues, setFormValues] = useState<MoniteringLog>({
        logCode: '',
        logDate: new Date(),
        observation: '',
        fieldCode: '',
        observedImage: '',
        staffList: [],
        cropList: [],
    });

    const [isEditing, setIsEditing] = useState(false);

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isEditing) {
            dispatch(editMonitoringLog(formValues));
        } else {
            dispatch(addMonitoringLog({ ...formValues, logDate: new Date() }));
        }

        resetForm();
    };

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

    const handleClose = () => {
        resetForm();
    };

    return (
        <div className={`modal-overlay ${showForm ? 'show' : ''}`}>
            <div className="modal-content">
                <form onSubmit={handleSubmit} className="field-form">
                    <h2>{isEditing ? "Edit Monitoring Log" : "Add New Monitoring Log"}</h2>

                    <div className="form-field">
                        <label>Log Code</label>
                        <input
                            type="text"
                            name="logCode"
                            placeholder="Log Code"
                            value={formValues.logCode}
                            onChange={handleChange}
                            required
                            disabled={isEditing}
                        />
                    </div>

                    <div className="form-field">
                        <label>Observation</label>
                        <textarea
                            name="observation"
                            placeholder="Observation"
                            value={formValues.observation}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label>Field Code</label>
                        <input
                            type="text"
                            name="fieldCode"
                            placeholder="Field Code"
                            value={formValues.fieldCode}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label>Observed Image URL</label>
                        <input
                            type="text"
                            name="observedImage"
                            placeholder="Observed Image URL"
                            value={formValues.observedImage}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        {isEditing ? "Update Log" : "Add Log"}
                    </button>

                    <button type="button" className="close-modal" onClick={handleClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MonitoringLogForm;
