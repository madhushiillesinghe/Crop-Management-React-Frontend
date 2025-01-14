import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { deleteStaff, setCurrentStaffId, toggleStaffForm } from '../../reducer/StaffReducer';
import backgroundImage from "../../assets/card-background/staffCardBackground.jpg";
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing icons

const StaffList: React.FC = () => {
    const dispatch = useDispatch();
    const staffList = useSelector((state: RootState) => state.staff.staffList);

    const handleEdit = (staffId: string) => {
        dispatch(setCurrentStaffId(staffId));
        dispatch(toggleStaffForm());
    };

    const handleDelete = (staffId: string) => {
        dispatch(deleteStaff(staffId));
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md staff-list">
            <h3 className="text-xl font-semibold mb-4">Staff List</h3>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 staff-cards">
                {staffList.map((staff) => (
                    <div key={staff.id} className="bg-gray-100 p-4 rounded-md shadow-sm staff-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
                        <h1 className="font-bold text-lg">{staff.firstName} {staff.lastName}</h1>
                        <p className="text-sm text-gray-600">Contact: {staff.contactNo}</p>
                        <p className="text-sm text-gray-600">Gender: {staff.gender}</p>
                        <p className="text-sm text-gray-600">Designation: {staff.designation}</p>
                        <p className="text-sm text-gray-600">Role: {staff.role}</p>
                        <div className="mt-4 flex justify-between">
                            <button
                                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                                onClick={() => handleEdit(staff.id)}
                            >
                                <FaEdit />
                            </button>
                            <button
                                className="p-2 bg-red-500 text-white rounded-md hover:bg-red-700"
                                onClick={() => handleDelete(staff.id)}
                            >
                                <FaTrashAlt />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaffList;
