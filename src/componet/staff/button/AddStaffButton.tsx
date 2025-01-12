import React from 'react';
import { useDispatch } from 'react-redux';
import {toggleStaffForm} from "../../../reducer/StaffReducer.ts";

const AddStaffButton: React.FC = () => {
    const dispatch = useDispatch();

    const handleAddStaff = () => {
        dispatch(toggleStaffForm()); // Toggle form visibility
    };

    return (
        <button onClick={handleAddStaff} className="add-staff-btn">
            Add Staff
        </button>
    );
};

export default AddStaffButton;
