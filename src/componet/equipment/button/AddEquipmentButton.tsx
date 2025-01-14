import React from 'react';
import { toggleEquipmentForm } from "../../../reducer/EquipmentReducer.ts";
import ReusableButton from "../../button/ActionButton.tsx";

const EquipmentButton: React.FC = () => {
    return <ReusableButton label="Add Equipment" onClickAction={toggleEquipmentForm} className="add-equipment-button" />;
};

export default EquipmentButton;
