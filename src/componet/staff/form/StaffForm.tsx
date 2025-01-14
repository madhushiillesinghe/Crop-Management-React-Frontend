import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/Store.ts";
import { addStaff, updateStaff, toggleStaffForm } from "../../../reducer/StaffReducer.ts";
import "../../../css/componet/Staff.css";
import ReusableForm from "../../Form/CommonForm.tsx";

const StaffForm: React.FC = () => {
    const dispatch = useDispatch();
    const currentStaffId = useSelector((state: RootState) => state.staff.currentStaffId);
    const staffList = useSelector((state: RootState) => state.staff.staffList);
    const showForm = useSelector((state: RootState) => state.staff.showForm);

    const [isEditing, setIsEditing] = useState(false);
    const [staffData, setStaffData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        designation: '',
        gender: '',
        joinedDate: '',
        dob: '',
        address: '',
        contactNo: '',
        email: '',
        role: '',
    });

    useEffect(() => {
        if (currentStaffId) {
            const existingStaff = staffList.find(staff => staff.id === currentStaffId);
            if (existingStaff) {
                setStaffData(existingStaff);
                setIsEditing(true);
            }
        } else {
            setIsEditing(false);
            setStaffData({
                id: '',
                firstName: '',
                lastName: '',
                designation: '',
                gender: '',
                joinedDate: '',
                dob: '',
                address: '',
                contactNo: '',
                email: '',
                role: '',
            });
        }
    }, [currentStaffId, staffList]);

    const handleSubmit = (values: Record<string, string>) => {
        if (isEditing) {
            dispatch(updateStaff(values));
        } else {
            dispatch(addStaff(values));
        }
        dispatch(toggleStaffForm()); // Close the form after submission
    };

    const handleClose = () => {
        dispatch(toggleStaffForm()); // Close the form without saving
    };

    // Define form fields for the reusable form
    const formFields = [
        { name: 'id', label: 'Id', type: 'text', placeholder: 'Enter Id' },
        { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter First Name' },
        { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter Last Name' },
        { name: 'designation', label: 'Designation', type: 'text', placeholder: 'Enter Designation' },
        { name: 'gender', label: 'Gender', type: 'text', placeholder: 'Enter Gender' },
        { name: 'joinedDate', label: 'Joined Date', type: 'date', placeholder: 'Enter Joined Date' },
        { name: 'dob', label: 'Date of Birth', type: 'date', placeholder: 'Enter Date of Birth' },
        { name: 'address', label: 'Address', type: 'text', placeholder: 'Enter Address' },
        { name: 'contactNo', label: 'Contact Number', type: 'text', placeholder: 'Enter Contact Number' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
        { name: 'role', label: 'Role', type: 'text', placeholder: 'Enter Role' },
    ];

    return (
        <div className={`modal-overlay ${showForm ? 'show' : ''}`}>
            <div className="modal-content">
                <ReusableForm
                    initialValues={staffData}
                    fields={formFields}
                    onSubmit={handleSubmit}
                    onClose={handleClose}
                    isEditing={isEditing}
                    showForm={showForm}
                />
            </div>
        </div>
    );
};

export default StaffForm;
