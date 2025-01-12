import { configureStore } from '@reduxjs/toolkit';
import cropReducer from '../reducer/CropReducer.ts';
import equipmentReducer from "../reducer/EquipmentReducer.ts";
import fieldReducer from "../reducer/FieldReducer.ts";
import vehicleReducer from "../reducer/VehicleReducer.ts";
import StaffReducer from "../reducer/StaffReducer.ts";
import MoniteringLogReducer from "../reducer/MoniteringLogReducer.ts";

const store = configureStore({
    reducer: {
        crop: cropReducer,
        equipment: equipmentReducer,
        field: fieldReducer,
        vehicle:vehicleReducer,
        staff:StaffReducer,
        monitoringLog:MoniteringLogReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
