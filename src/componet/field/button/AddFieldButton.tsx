// component/field/button/AddFieldButton.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFieldForm } from '../../../reducer/FieldReducer.ts';

const AddFieldButton: React.FC = () => {
    const dispatch = useDispatch();

    const handleAddFieldClick = () => {
        dispatch(toggleFieldForm());
    };

    return (
        <button onClick={handleAddFieldClick} className="add-field-button">
            Add Field
        </button>
    );
};

export default AddFieldButton;
