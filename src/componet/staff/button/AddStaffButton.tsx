import React from 'react';
import ReusableButton from "../../button/ActionButton.tsx";
import {toggleStaffForm} from "../../../reducer/StaffReducer.ts";

const AddStaffButton: React.FC = () => {

    return <ReusableButton label="Add Staff" onClickAction={toggleStaffForm} className="add-staff-btn" />;
};

export default AddStaffButton;
