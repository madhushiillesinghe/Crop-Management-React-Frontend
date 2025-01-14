import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/Store.ts";
import { addVehicle, editVehicle, toggleVehicleForm } from "../../../reducer/VehicleReducer.ts";
import ReusableForm from "../../Form/CommonForm.tsx";
import "../../../css/componet/Vehicle.css"

const VehicleForm: React.FC = () => {
    const dispatch = useDispatch();
    const vehicleItems = useSelector((state: RootState) => state.vehicle.vehicleItems);
    const showForm = useSelector((state: RootState) => state.vehicle.showForm);
    const currentVehicleCode = useSelector((state: RootState) => state.vehicle.currentVehicleCode);

    const [isEditing, setIsEditing] = useState(false);
    const [initialFormData, setInitialFormData] = useState({
        vehicleCode: '',
        licensePlateNo: '',
        vehicleCategory: '',
        fuelType: '',
        status: '',
        remarks: '',
        staffId: '',
    });

    useEffect(() => {
        if (currentVehicleCode) {
            const vehicleToEdit = vehicleItems.find(vehicle => vehicle.vehicleCode === currentVehicleCode);
            if (vehicleToEdit) {
                setIsEditing(true);
                // Update initial form data with the vehicle's details
                setInitialFormData({
                    vehicleCode: vehicleToEdit.vehicleCode,
                    licensePlateNo: vehicleToEdit.licensePlateNo,
                    vehicleCategory: vehicleToEdit.vehicleCategory,
                    fuelType: vehicleToEdit.fuelType,
                    status: vehicleToEdit.status,
                    remarks: vehicleToEdit.remarks,
                    staffId: vehicleToEdit.staffId,
                });
            }
        } else {
            setIsEditing(false);
            setInitialFormData({
                vehicleCode: '',
                licensePlateNo: '',
                vehicleCategory: '',
                fuelType: '',
                status: '',
                remarks: '',
                staffId: '',
            });
        }
    }, [currentVehicleCode, vehicleItems]);

    const vehicleFields = [
        { name: 'vehicleCode', label: 'Vehicle Code', type: 'text', placeholder: 'Vehicle Code' },
        { name: 'licensePlateNo', label: 'License Plate No', type: 'text', placeholder: 'License Plate No' },
        { name: 'vehicleCategory', label: 'Vehicle Category', type: 'text', placeholder: 'Vehicle Category' },
        { name: 'fuelType', label: 'Fuel Type', type: 'text', placeholder: 'Fuel Type' },
        { name: 'status', label: 'Status', type: 'text', placeholder: 'Status' },
        { name: 'remarks', label: 'Remarks', type: 'text', placeholder: 'Remarks' },
        { name: 'staffId', label: 'Staff ID', type: 'text', placeholder: 'Staff ID' },
    ];

    const handleSubmit = (formData: Record<string, string>) => {
        if (isEditing) {
            dispatch(editVehicle(formData));
        } else {
            dispatch(addVehicle(formData));
        }
        dispatch(toggleVehicleForm());
    };

    const handleClose = () => {
        dispatch(toggleVehicleForm());
    };

    return (
        <div>
            <ReusableForm
                initialValues={initialFormData}
                fields={vehicleFields}
                onSubmit={handleSubmit}
                onClose={handleClose}
                isEditing={isEditing}
                showForm={showForm}
            />
        </div>
    );
};

export default VehicleForm;
