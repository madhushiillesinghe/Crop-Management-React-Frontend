import React from 'react';
import { toggleForm } from "../../../reducer/CropReducer.ts";
import ReusableButton from "../../button/ActionButton.tsx";

const CropButton: React.FC = () => {
    return (
        <div className="flex justify-end"> {}
            <ReusableButton label="Add Crop" onClickAction={toggleForm} className="add-crop-button" />
        </div>
    );
};

export default CropButton;
