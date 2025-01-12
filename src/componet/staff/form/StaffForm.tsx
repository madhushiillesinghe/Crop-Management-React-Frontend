import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/Store.ts";
import "../../../css/componet/Staff.css"; // Ensure correct styling path
import { addStaff, updateStaff, toggleStaffForm } from "../../../reducer/StaffReducer.ts";

const StaffForm: React.FC = () => {
    const dispatch = useDispatch();

    const currentStaffId = useSelector((state: RootState) => state.staff.currentStaffId);
    const staffList = useSelector((state: RootState) => state.staff.staffList);

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
        monitoringLogs: existingStaff?.monitoringLogs || [],
        equipment: existingStaff?.equipment || [],
        vehicles: existingStaff?.vehicles || [],
        fields: existingStaff?.fields || []
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
                monitoringLogs: existingStaff.monitoringLogs,
                equipment: existingStaff.equipment,
                vehicles: existingStaff.vehicles,
                fields: existingStaff.fields
            });
        }
    }, [existingStaff]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStaffData({ ...staffData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(currentStaffId+"currentStaffId="+currentStaffId);
        if (currentStaffId) {
            // Update staff data
            dispatch(updateStaff({
                ...staffData,
                monitoringLogs: staffData.monitoringLogs || [],
                equipment: staffData.equipment || [],
                vehicles: staffData.vehicles || [],
                fields: staffData.fields || []
            }));
        } else {
            // Add new staff
            dispatch(addStaff({
                ...staffData,
                monitoringLogs: staffData.monitoringLogs || [],
                equipment: staffData.equipment || [],
                vehicles: staffData.vehicles || [],
                fields: staffData.fields || []
            }));
        }
        dispatch(toggleStaffForm()); // Close the form
    };

    return (
        <form onSubmit={handleSubmit} className="staff-form">
            <input
                type="text"
                name="id"
                placeholder="Id"
                value={staffData.id}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={staffData.firstName}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={staffData.lastName}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={staffData.designation}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={staffData.gender}
                onChange={handleInputChange}
                required
            />
            <input
                type="date"
                name="joinedDate"
                value={staffData.joinedDate}
                onChange={handleInputChange}
                required
            />
            <input
                type="date"
                name="dob"
                value={staffData.dob}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={staffData.address}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="contactNo"
                placeholder="Contact No"
                value={staffData.contactNo}
                onChange={handleInputChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={staffData.email}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="role"
                placeholder="Role"
                value={staffData.role}
                onChange={handleInputChange}
                required
            />
            <button type="submit">{currentStaffId ? 'Update Staff' : 'Add Staff'}</button>
        </form>
    );
};

export default StaffForm;
