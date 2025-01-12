    // reducer/vehicleReducer.ts
    import { createSlice, PayloadAction } from '@reduxjs/toolkit';
    import { Vehicle } from '../model/Vehicle.ts';

    interface VehicleState {
        vehicleItems: Vehicle[];
        showForm: boolean;
        currentVehicleCode: string | null;
    }

    const initialState: VehicleState = {
        vehicleItems: [],
        showForm: false,
        currentVehicleCode: null,
    };

    const vehicleSlice = createSlice({
        name: 'vehicle',
        initialState,
        reducers: {
            toggleVehicleForm: (state) => {
                state.showForm = !state.showForm;
            },
            setCurrentVehicleCode: (state, action: PayloadAction<string | null>) => {
                state.currentVehicleCode = action.payload;
            },
            addVehicle: (state, action: PayloadAction<Vehicle>) => {
                state.vehicleItems.push(action.payload);
            },
            editVehicle: (state, action: PayloadAction<Vehicle>) => {
                const index = state.vehicleItems.findIndex((vehicle) => vehicle.vehicleCode === action.payload.vehicleCode);
                if (index !== -1) {
                    state.vehicleItems[index] = action.payload;
                }
            },
            deleteVehicle: (state, action: PayloadAction<string>) => {
                state.vehicleItems = state.vehicleItems.filter(vehicle => vehicle.vehicleCode !== action.payload);
            },
        },
    });

    export const { toggleVehicleForm, setCurrentVehicleCode, addVehicle, editVehicle, deleteVehicle } = vehicleSlice.actions;
    export default vehicleSlice.reducer;
