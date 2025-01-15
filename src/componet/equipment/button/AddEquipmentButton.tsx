import React from 'react';
import { toggleEquipmentForm } from "../../../reducer/EquipmentReducer.ts";
import ReusableButton from "../../button/ActionButton.tsx";

const EquipmentButton: React.FC = () => {
    return (
        <div className="flex justify-end"> {/* Aligns button to the right */}
            <ReusableButton label="Add Equipment" onClickAction={toggleEquipmentForm} className="add-equipment-button" />
        </div>
    );
};

export default EquipmentButton;
