import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleForm } from "../../../reducer/CropReducer.ts";

const CropButton: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(toggleForm())}>Add Crop</button>
    );
};

export default CropButton;
