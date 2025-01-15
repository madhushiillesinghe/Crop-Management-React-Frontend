import React from 'react';
import { toggleFieldForm } from '../../../reducer/FieldReducer.ts';
import ReusableButton from "../../button/ActionButton.tsx";

const AddFieldButton: React.FC = () => {
    return (
        <div className="flex justify-end"> {/* Aligns the button to the right */}
            <ReusableButton label="Add Field" onClickAction={toggleFieldForm} className="add-field-button" />
        </div>
    );
};

export default AddFieldButton;
