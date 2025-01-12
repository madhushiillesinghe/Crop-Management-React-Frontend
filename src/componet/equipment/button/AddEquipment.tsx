import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleEquipmentForm } from "../../../reducer/EquipmentReducer.ts";

const EquipmentButton: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(toggleEquipmentForm())}>Add Equipment</button>
    );
};

export default EquipmentButton;
