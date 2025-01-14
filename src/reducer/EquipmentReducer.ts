import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Equipment } from '../model/Equipment.ts';

interface EquipmentState {
    equipmentItems: Equipment[];
    showForm: boolean;
    currentEquipmentId: string | null;
}

const initialState: EquipmentState = {
    equipmentItems: [
        new Equipment('EQ001', 'Tractor', 'Machinery', 'Available', 'FD001', 'STF001'),
        new Equipment('EQ002', 'Harvester', 'Machinery', 'In Use', 'FD002', 'STF002'),
        new Equipment('EQ003', 'Sprinkler', 'Irrigation', 'Available', 'FD003', 'STF003'),
    ],
    showForm: false,
    currentEquipmentId: null,
};

const equipmentSlice = createSlice({
    name: 'equipment',
    initialState,
    reducers: {
        toggleEquipmentForm: (state) => {
            state.showForm = !state.showForm;
        },

        setCurrentEquipmentId: (state, action: PayloadAction<string | null>) => {
            state.currentEquipmentId = action.payload;
        },

        addEquipment: (state, action: PayloadAction<Equipment>) => {
            state.equipmentItems.push(action.payload);
        },

        editEquipment: (state, action: PayloadAction<Equipment>) => {
            const index = state.equipmentItems.findIndex((equipment) => equipment.id === action.payload.id);
            if (index !== -1) {
                state.equipmentItems[index] = { ...state.equipmentItems[index], ...action.payload };
            }
        },

        deleteEquipment: (state, action: PayloadAction<string>) => {
            state.equipmentItems = state.equipmentItems.filter((equipment) => equipment.id !== action.payload);
        },
    },
});

export const { toggleEquipmentForm, setCurrentEquipmentId, addEquipment, editEquipment, deleteEquipment } =
    equipmentSlice.actions;

export default equipmentSlice.reducer;
