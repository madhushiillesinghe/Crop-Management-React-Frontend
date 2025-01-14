import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {FieldData} from "../model/Field.ts";

interface FieldState {
    fieldItems: FieldData[];
    showForm: boolean;
    currentFieldCode: string | null;
}

const initialState: FieldState = {
    fieldItems: [
        {
            fieldCode: 'F001',
            fieldName: 'Green Valley',
            fieldLocation: 'Hill Country',
            extentSize: 15,
            fieldImage1: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Green+Valley',
            fieldImage2: '',
            staffList: [],
            cropList: [],
            monitoringLogs: [],
        },
        {
            fieldCode: 'F002',
            fieldName: 'Sunny Acres',
            fieldLocation: 'Coastal Plains',
            extentSize: 20,
            fieldImage1: 'https://via.placeholder.com/150/FFD700/FFFFFF?text=Sunny+Acres',
            fieldImage2: '',
            staffList: [],
            cropList: [],
            monitoringLogs: [],
        },
    ],
    showForm: false,
    currentFieldCode: null,
};


const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        toggleFieldForm: (state) => {
            state.showForm = !state.showForm;
        },
        setCurrentFieldCode: (state, action: PayloadAction<string | null>) => {
            state.currentFieldCode = action.payload;
        },
        addField: (state, action: PayloadAction<FieldData>) => {
            state.fieldItems.push(action.payload);
        },
        editField: (state, action: PayloadAction<FieldData>) => {
            const index = state.fieldItems.findIndex(field => field.fieldCode === action.payload.fieldCode);
            if (index !== -1) {
                state.fieldItems[index] = action.payload;
            }
        },
        deleteField: (state, action: PayloadAction<string>) => {
            state.fieldItems = state.fieldItems.filter(field => field.fieldCode !== action.payload);
        },
    },
});

export const { toggleFieldForm, setCurrentFieldCode, addField, editField, deleteField } = fieldSlice.actions;
export default fieldSlice.reducer;
