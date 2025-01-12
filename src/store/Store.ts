import { configureStore } from '@reduxjs/toolkit';
import cropReducer from '../reducer/CropReducer.ts';
import equipmentReducer from "../reducer/EquipmentReducer.ts";
import fieldReducer from "../reducer/FieldReducer.ts";

const store = configureStore({
    reducer: {
        crop: cropReducer,
        equipment: equipmentReducer,
        field: fieldReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
