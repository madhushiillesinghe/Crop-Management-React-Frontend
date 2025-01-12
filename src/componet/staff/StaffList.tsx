import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { deleteStaff, setCurrentStaffId, toggleStaffForm } from '../../reducer/StaffReducer';

const StaffList: React.FC = () => {
    const dispatch = useDispatch();
    const staffList = useSelector((state: RootState) => state.staff.staffList);

    const handleEdit = (staffId: string) => {
        dispatch(setCurrentStaffId(staffId));
        dispatch(toggleStaffForm()); // Show the form for editing
    };

    const handleDelete = (staffId: string) => {
        dispatch(deleteStaff(staffId)); // Delete the staff from the list
    };

    return (
        <div className="staff-list">
            <h3>Staff List</h3>
            <div className="staff-cards">
                {staffList.map((staff) => (
                    <div key={staff.id} className="staff-card">
                        <p>Name: {staff.firstName} {staff.lastName}</p>
                        <p>Contact No: {staff.contactNo}</p>
                        <p>Gender: {staff.gender}</p>
                        <p>Designation: {staff.designation}</p>
                        <p>Role: {staff.role}</p>
                        <button onClick={() => handleEdit(staff.id)}>Edit</button>
                        <button onClick={() => handleDelete(staff.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaffList;
