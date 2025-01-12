import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MoniteringLog } from '../model/MoniteringLog.ts';

interface MonitoringLogState {
    monitoringLogs: MoniteringLog[];
    currentLogCode: string | null;
    showForm: boolean; // Added to handle form visibility
}

const initialState: MonitoringLogState = {
    monitoringLogs: [],
    currentLogCode: null,
    showForm: false, // Initial form visibility state
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

        // Delete a monitoring log by logCode
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
