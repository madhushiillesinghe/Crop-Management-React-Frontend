import { configureStore } from '@reduxjs/toolkit';
import cropReducer from '../reducer/CropReducer.ts';
import equipmentReducer from "../reducer/EquipmentReducer.ts";

const store = configureStore({
    reducer: {
        crop: cropReducer,
        equipment: equipmentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
