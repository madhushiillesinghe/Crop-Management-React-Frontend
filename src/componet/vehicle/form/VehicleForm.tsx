import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/Store.ts";
import '../../../css/componet/vehicle.css';
import { addVehicle, editVehicle, toggleVehicleForm } from "../../../reducer/VehicleReducer.ts";

const VehicleForm: React.FC = () => {
    const dispatch = useDispatch();

    const currentVehicleCode = useSelector((state: RootState) => state.vehicle.currentVehicleCode);
    const vehicleItems = useSelector((state: RootState) => state.vehicle.vehicleItems);

    const existingVehicle = vehicleItems.find(vehicle => vehicle.vehicleCode === currentVehicleCode);

    const [vehicleData, setVehicleData] = useState({
        vehicleCode: existingVehicle?.vehicleCode || '',
        licensePlateNo: existingVehicle?.licensePlateNo || '',
        vehicleCategory: existingVehicle?.vehicleCategory || '',
        fuelType: existingVehicle?.fuelType || '',
        status: existingVehicle?.status || '',
        remarks: existingVehicle?.remarks || '',
        staffId: existingVehicle?.staffId || '',
    });

    // Update form state when existingVehicle changes
    useEffect(() => {
        if (existingVehicle) {
            setVehicleData({
                vehicleCode: existingVehicle.vehicleCode,
                licensePlateNo: existingVehicle.licensePlateNo,
                vehicleCategory: existingVehicle.vehicleCategory,
                fuelType: existingVehicle.fuelType,
                status: existingVehicle.status,
                remarks: existingVehicle.remarks,
                staffId: existingVehicle.staffId,
            });
        }
    }, [existingVehicle]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentVehicleCode) {
            dispatch(editVehicle(vehicleData));
        } else {
            // Add new vehicle
            dispatch(addVehicle(vehicleData));
        }
        dispatch(toggleVehicleForm()); // Hide form after submit
    };

    return (
        <form onSubmit={handleSubmit} className="vehicle-form">
            <input
                type="text"
                name="vehicleCode"
                placeholder="Vehicle Code"
                value={vehicleData.vehicleCode}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="licensePlateNo"
                placeholder="License Plate No"
                value={vehicleData.licensePlateNo}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="vehicleCategory"
                placeholder="Vehicle Category"
                value={vehicleData.vehicleCategory}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="fuelType"
                placeholder="Fuel Type"
                value={vehicleData.fuelType}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="status"
                placeholder="Status"
                value={vehicleData.status}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="remarks"
                placeholder="Remarks"
                value={vehicleData.remarks}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="staffId"
                placeholder="Staff ID"
                value={vehicleData.staffId}
                onChange={handleInputChange}
                required
            />
            <button type="submit">Save Vehicle</button>
        </form>
    );
};

export default VehicleForm;
