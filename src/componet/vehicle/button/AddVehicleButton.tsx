import React from 'react';
import { toggleVehicleForm } from '../../../reducer/VehicleReducer.ts';
import ReusableButton from "../../button/ActionButton.tsx";

const AddVehicleButton: React.FC = () => {
    return (
        <div className="flex justify-end"> {/* Ensures right alignment */}
            <ReusableButton label="Add Vehicle" onClickAction={toggleVehicleForm} className="add-vehicle-btn" />
        </div>
    );
};

export default AddVehicleButton;
