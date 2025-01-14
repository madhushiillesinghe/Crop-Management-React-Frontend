import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/Store.ts";
import "../../../css/componet/Staff.css";
import { addStaff, updateStaff, toggleStaffForm } from "../../../reducer/StaffReducer.ts";

const StaffForm: React.FC = () => {
    const dispatch = useDispatch();

    const currentStaffId = useSelector((state: RootState) => state.staff.currentStaffId);
    const staffList = useSelector((state: RootState) => state.staff.staffList);
    const showForm = useSelector((state: RootState) => state.staff.showForm);

    const existingStaff = staffList.find(staff => staff.id === currentStaffId);

    const [staffData, setStaffData] = useState({
        id: existingStaff?.id || '',
        firstName: existingStaff?.firstName || '',
        lastName: existingStaff?.lastName || '',
        designation: existingStaff?.designation || '',
        gender: existingStaff?.gender || '',
        joinedDate: existingStaff?.joinedDate || '',
        dob: existingStaff?.dob || '',
        address: existingStaff?.address || '',
        contactNo: existingStaff?.contactNo || '',
        email: existingStaff?.email || '',
        role: existingStaff?.role || '',
    });

    useEffect(() => {
        if (existingStaff) {
            setStaffData({
                id: existingStaff.id,
                firstName: existingStaff.firstName,
                lastName: existingStaff.lastName,
                designation: existingStaff.designation,
                gender: existingStaff.gender,
                joinedDate: existingStaff.joinedDate,
                dob: existingStaff.dob,
                address: existingStaff.address,
                contactNo: existingStaff.contactNo,
                email: existingStaff.email,
                role: existingStaff.role,
            });
        }
    }, [existingStaff]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStaffData({ ...staffData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentStaffId) {
            dispatch(updateStaff(staffData));
        } else {
            dispatch(addStaff(staffData));
        }
        dispatch(toggleStaffForm());
    };

    const handleClose = () => {
        dispatch(toggleStaffForm());
    };

    return (
        <div className={`modal-overlay ${showForm ? 'show' : ''}`}>
            <div className="modal-content">
                <form onSubmit={handleSubmit} className="staff-form">
                    <h2>{currentStaffId ? "Edit Staff" : "Add New Staff"}</h2>

                    {Object.keys(staffData).map((key) => (
                        <div className="form-field" key={key}>
                            <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                            <input
                                type={key === 'joinedDate' || key === 'dob' ? 'date' : 'text'}
                                name={key}
                                value={staffData[key as keyof typeof staffData]}
                                onChange={handleInputChange}
                                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                                required={key !== 'address'}
                            />
                        </div>
                    ))}

                    <button type="submit" className="submit-button">
                        {currentStaffId ? "Update Staff" : "Add Staff"}
                    </button>

                    <button type="button" className="close-modal" onClick={handleClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

export default StaffForm;
