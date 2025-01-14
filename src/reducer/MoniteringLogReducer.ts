import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MoniteringLog } from '../model/MoniteringLog.ts';

interface MonitoringLogState {
    monitoringLogs: MoniteringLog[];
    currentLogCode: string | null;
    showForm: boolean;
}

const initialState: MonitoringLogState = {
    monitoringLogs: [
        {
            logCode: 'LOG001',
            logDate: new Date('2024-01-10'),
            observation: 'Healthy crop with good growth.',
            fieldCode: 'FIELD001',
            observedImage: 'https://via.placeholder.com/150',
            staffList: [],
            cropList: [],
        },
        {
            logCode: 'LOG002',
            logDate: new Date('2024-01-11'),
            observation: 'Pest issue in some areas.',
            fieldCode: 'FIELD002',
            observedImage: 'https://via.placeholder.com/150',
            staffList: [],
            cropList: [],
        },
        {
            logCode: 'LOG003',
            logDate: new Date('2024-01-12'),
            observation: 'Requires irrigation.',
            fieldCode: 'FIELD003',
            observedImage: 'https://via.placeholder.com/150',
            staffList: [],
            cropList: [],
        },
    ],
    currentLogCode: null,
    showForm: false,
};

const monitoringLogSlice = createSlice({
    name: 'monitoringLog',
    initialState,
    reducers: {
        toggleMonitoringLogForm: (state) => {
            state.showForm = !state.showForm;
        },

        setCurrentLogCode: (state, action: PayloadAction<string | null>) => {
            state.currentLogCode = action.payload;
        },

        addMonitoringLog: (state, action: PayloadAction<MoniteringLog>) => {
            state.monitoringLogs.push(action.payload);
        },

        editMonitoringLog: (state, action: PayloadAction<MoniteringLog>) => {
            const index = state.monitoringLogs.findIndex(
                (log) => log.logCode === action.payload.logCode
            );
            if (index !== -1) {
                state.monitoringLogs[index] = action.payload;
            }
        },

        deleteMonitoringLog: (state, action: PayloadAction<string>) => {
            state.monitoringLogs = state.monitoringLogs.filter(
                (log) => log.logCode !== action.payload
            );
        },
    },
});

export const {
    addMonitoringLog,
    editMonitoringLog,
    deleteMonitoringLog,
    setCurrentLogCode,
    toggleMonitoringLogForm,
} = monitoringLogSlice.actions;

export default monitoringLogSlice.reducer;
