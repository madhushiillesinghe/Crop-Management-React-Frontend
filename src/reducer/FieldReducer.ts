import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Field } from '../model/Field';

interface FieldState {
    fieldItems: Field[];
    showForm: boolean;
    currentFieldCode: string | null;
}

const initialState: FieldState = {
    fieldItems: [],
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
        addField: (state, action: PayloadAction<Field>) => {
            state.fieldItems.push(action.payload);
        },
        editField: (state, action: PayloadAction<Field>) => {
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
