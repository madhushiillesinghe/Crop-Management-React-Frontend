// staffReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Staff} from "../model/Staff.ts";


interface StaffState {
    staffList: Staff[];
    showForm: boolean;
    currentStaffId: string | null;
}

const initialState: StaffState = {
    staffList: [
        new Staff(
            '1',
            'John',
            'Doe',
            'Manager',
            'Male',
            '2021-06-15',
            '1985-01-20',
            '123 Main St, City',
            '123-456-7890',
            'john.doe@example.com',
            'Admin',

        ),
        new Staff(
            '2',
            'Jane',
            'Smith',
            'Assistant',
            'Female',
            '2020-03-10',
            '1990-08-14',
            '456 Oak St, City',
            '987-654-3210',
            'jane.smith@example.com',
            'User',
        ),
        new Staff(
            '3',
            'Michael',
            'Johnson',
            'Clerk',
            'Male',
            '2019-05-20',
            '1980-11-10',
            '789 Pine St, City',
            '555-123-4567',
            'michael.johnson@example.com',
            'User',
        ),
    ],
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
            const index = state.staffList.findIndex((staff) => staff.id === action.payload.id);
            if (index !== -1) {
                state.staffList[index] = action.payload;
            }
        },
        deleteStaff: (state, action: PayloadAction<string>) => {
            state.staffList = state.staffList.filter((staff) => staff.id !== action.payload);
        },
    },
});

export const { toggleStaffForm, setCurrentStaffId, addStaff, updateStaff, deleteStaff } = staffSlice.actions;

export default staffSlice.reducer;
