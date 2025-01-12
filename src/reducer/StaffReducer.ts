import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Staff } from '../model/Staff';

interface StaffState {
    staffList: Staff[];
    showForm: boolean;
    currentStaffId: string | null;
}

const initialState: StaffState = {
    staffList: [],
    showForm: false,
    currentStaffId: null,
};

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        toggleStaffForm: (state) => {
            state.showForm = !state.showForm;
        },
        setCurrentStaffId: (state, action: PayloadAction<string | null>) => {
            state.currentStaffId = action.payload;
        },
        addStaff: (state, action: PayloadAction<Staff>) => {
            state.staffList.push(action.payload);
        },
        updateStaff: (state, action: PayloadAction<Staff>) => {
            const index = state.staffList.findIndex(staff => staff.id === action.payload.id);
            if (index !== -1) {
                state.staffList[index] = action.payload;
            }
        },
        deleteStaff: (state, action: PayloadAction<string>) => {
            state.staffList = state.staffList.filter(staff => staff.id !== action.payload);
        },
    },
});

export const { toggleStaffForm, setCurrentStaffId, addStaff, updateStaff, deleteStaff } = staffSlice.actions;

export default staffSlice.reducer;
