import React from 'react';
import { toggleForm } from "../../../reducer/CropReducer.ts";
import ReusableButton from "../../button/ActionButton.tsx";

const CropButton: React.FC = () => {
    return <ReusableButton label="Add Crop" onClickAction={toggleForm} className="add-crop-button" />;
};

export default CropButton;
