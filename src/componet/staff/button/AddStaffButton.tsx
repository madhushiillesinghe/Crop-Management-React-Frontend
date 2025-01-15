import React from 'react';
import ReusableButton from "../../button/ActionButton.tsx";
import { toggleStaffForm } from "../../../reducer/StaffReducer.ts";

const AddStaffButton: React.FC = () => {
    return (
        <div className="flex justify-end"> {/* Aligns button to the right */}
            <ReusableButton label="Add Staff" onClickAction={toggleStaffForm} className="add-staff-btn" />
        </div>
    );
};

export default AddStaffButton;
