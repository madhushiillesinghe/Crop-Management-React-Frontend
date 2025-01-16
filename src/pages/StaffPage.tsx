import React from 'react';
import { useSelector } from 'react-redux';
import {RootState} from "../store/Store.ts";

import AddStaffButton from "../componet/staff/button/AddStaffButton.tsx";
import StaffForm from "../componet/staff/form/StaffForm.tsx";
import StaffList from "../componet/staff/StaffList.tsx";
import TopBar from "../componet/TopBar.tsx";

const StaffPage: React.FC = () => {
    const showForm = useSelector((state: RootState) => state.staff.showForm);

    return (
        <div className="min-h-screen bg-gray-100">
            <TopBar
            />
            <div>
                <h1>Staff Management</h1>
                <AddStaffButton/>
                {showForm && <StaffForm/>}
                <StaffList/>
            </div>
        </div>
            );
            };

            export default StaffPage;
