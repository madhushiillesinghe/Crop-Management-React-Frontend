    import { createSlice, PayloadAction } from '@reduxjs/toolkit';
    import { Vehicle } from '../model/Vehicle.ts';

    interface VehicleState {
        vehicleItems: Vehicle[];
        showForm: boolean;
        currentVehicleCode: string | null;
    }

    const initialState: VehicleState = {
        vehicleItems: [
            {
                vehicleCode: "V001",
                licensePlateNo: "ABC-1234",
                vehicleCategory: "Car",
                fuelType: "Petrol",
                status: "Available",
                remarks: "Brand new vehicle",
                staffId: "S001",
            },
            {
                vehicleCode: "V002",
                licensePlateNo: "DEF-5678",
                vehicleCategory: "Van",
                fuelType: "Diesel",
                status: "In Use",
                remarks: "Needs servicing",
                staffId: "S002",
            },
            {
                vehicleCode: "V003",
                licensePlateNo: "GHI-9101",
                vehicleCategory: "Truck",
                fuelType: "Diesel",
                status: "Available",
                remarks: "Heavy-duty truck",
                staffId: "S003",
            },
        ],
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
