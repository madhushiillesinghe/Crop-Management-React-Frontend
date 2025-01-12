import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Equipment } from '../model/Equipment.ts';

// Define the initial state for equipment
interface EquipmentState {
    equipmentItems: Equipment[];
    showForm: boolean;
    currentEquipmentId: string | null;
}

// Initial state
const initialState: EquipmentState = {
    equipmentItems: [],
    showForm: false,
    currentEquipmentId: null,
};

const equipmentSlice = createSlice({
    name: 'equipment',
    initialState,
    reducers: {
        // Toggle the visibility of the equipment form
        toggleEquipmentForm: (state) => {
            state.showForm = !state.showForm;
        },

        // Set the ID of the current equipment for editing
        setCurrentEquipmentId: (state, action: PayloadAction<string | null>) => {
            state.currentEquipmentId = action.payload;
        },

        // Add new equipment to the list
        addEquipment: (state, action: PayloadAction<Equipment>) => {
            state.equipmentItems.push(action.payload);
        },

        // Edit existing equipment in the list
        editEquipment: (state, action: PayloadAction<Equipment>) => {
            const index = state.equipmentItems.findIndex((equipment) => equipment.id === action.payload.id);
            if (index !== -1) {
                state.equipmentItems[index] = { ...state.equipmentItems[index], ...action.payload };
            }
        },

        // Delete equipment from the list
        deleteEquipment: (state, action: PayloadAction<string>) => {
            state.equipmentItems = state.equipmentItems.filter((equipment) => equipment.id !== action.payload);
        },
    },
});

// Export actions and reducer
export const { toggleEquipmentForm, setCurrentEquipmentId, addEquipment, editEquipment, deleteEquipment } =
    equipmentSlice.actions;

export default equipmentSlice.reducer;
