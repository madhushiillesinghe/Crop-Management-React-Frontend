import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Crop } from "../model/Crop.ts";

interface CropState {
    crops: Crop[];
    showForm: boolean;
    currentCropId: string | null; // Added the currentCropId field here
}

const initialState: CropState = {
    crops: [],
    showForm: false,
    currentCropId: null, // Initializing currentCropId as null
};

const cropSlice = createSlice({
    name: 'crop',
    initialState,
    reducers: {
        toggleForm: (state) => {
            state.showForm = !state.showForm;
        },
        setCurrentCropId: (state, action: PayloadAction<string | null>) => {
            state.currentCropId = action.payload;
        },
        addCrop: (state, action: PayloadAction<Crop>) => {
            state.crops.push(action.payload);
        },
        editCrop: (state, action: PayloadAction<Crop>) => {
            const index = state.crops.findIndex((crop) => crop.code === action.payload.code);
            if (index !== -1) {
                state.crops[index] = action.payload;
            }
        },
        deleteCrop: (state, action: PayloadAction<string>) => {
            state.crops = state.crops.filter(crop => crop.code !== action.payload);
        },
    },
});

export const { toggleForm, setCurrentCropId, addCrop, editCrop, deleteCrop } = cropSlice.actions;
export default cropSlice.reducer;
