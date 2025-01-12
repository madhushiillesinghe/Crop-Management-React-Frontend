import React from 'react';
import { useDispatch } from 'react-redux';
import {toggleVehicleForm} from "../../../reducer/VehicleReducer.ts";

const AddVehicleButton: React.FC = () => {
    const dispatch = useDispatch();

    const handleAddVehicle = () => {
        dispatch(toggleVehicleForm()); // Toggle form visibility
    };

    return (
        <button onClick={handleAddVehicle} className="add-vehicle-btn">
            Add Vehicle
        </button>
    );
};

export default AddVehicleButton;
