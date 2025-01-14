import React from 'react';
import { toggleFieldForm } from '../../../reducer/FieldReducer.ts';
import ReusableButton from "../../button/ActionButton.tsx";

const AddFieldButton: React.FC = () => {
    return <ReusableButton label="Add Field" onClickAction={toggleFieldForm} className="add-field-button" />;
};

export default AddFieldButton;
