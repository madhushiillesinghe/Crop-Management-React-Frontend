import React from 'react';
import { toggleVehicleForm } from '../../../reducer/VehicleReducer.ts';
import ReusableButton from "../../button/ActionButton.tsx";

const AddVehicleButton: React.FC = () => {
    return <ReusableButton label="Add Vehicle" onClickAction={toggleVehicleForm} className="add-vehicle-btn" />;
};

export default AddVehicleButton;
