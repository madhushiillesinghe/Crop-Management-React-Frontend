import { configureStore } from '@reduxjs/toolkit';
import cropReducer from '../reducer/CropReducer.ts';

const store = configureStore({
    reducer: {
        crop: cropReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
