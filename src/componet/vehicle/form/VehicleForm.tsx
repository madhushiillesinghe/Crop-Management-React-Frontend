import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/Store.ts";
import "../../../css/componet/Vehicle.css";
import { addVehicle, editVehicle, toggleVehicleForm } from "../../../reducer/VehicleReducer.ts";

const VehicleForm: React.FC = () => {
    const dispatch = useDispatch();
    const vehicleItems = useSelector((state: RootState) => state.vehicle.vehicleItems);
    const showForm = useSelector((state: RootState) => state.vehicle.showForm);
    const currentVehicleCode = useSelector((state: RootState) => state.vehicle.currentVehicleCode);

    const [vehicleData, setVehicleData] = useState({
        vehicleCode: '',
        licensePlateNo: '',
        vehicleCategory: '',
        fuelType: '',
        status: '',
        remarks: '',
        staffId: '',
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (currentVehicleCode) {
            const vehicleToEdit = vehicleItems.find(vehicle => vehicle.vehicleCode === currentVehicleCode);
            if (vehicleToEdit) {
                setVehicleData(vehicleToEdit);
                setIsEditing(true);
            }
        } else {
            resetForm();
        }
    }, [currentVehicleCode, vehicleItems]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            dispatch(editVehicle(vehicleData));
        } else {
            dispatch(addVehicle(vehicleData));
        }
        resetForm();
    };

    const resetForm = () => {
        setVehicleData({
            vehicleCode: '',
            licensePlateNo: '',
            vehicleCategory: '',
            fuelType: '',
            status: '',
            remarks: '',
            staffId: '',
        });
        setIsEditing(false);
        dispatch(toggleVehicleForm());
    };

    const handleClose = () => {
        resetForm();
    };

    return (
        <div className={`modal-overlay ${showForm ? 'show' : ''}`}>
            <div className="modal-content">
                <form onSubmit={handleSubmit} className="vehicle-form">
                    <h2>{isEditing ? "Edit Vehicle" : "Add New Vehicle"}</h2>

                    <div className="form-field">
                        <label>Vehicle Code</label>
                        <input
                            type="text"
                            name="vehicleCode"
                            placeholder="Vehicle Code"
                            value={vehicleData.vehicleCode}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label>License Plate No</label>
                        <input
                            type="text"
                            name="licensePlateNo"
                            placeholder="License Plate No"
                            value={vehicleData.licensePlateNo}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label>Vehicle Category</label>
                        <input
                            type="text"
                            name="vehicleCategory"
                            placeholder="Vehicle Category"
                            value={vehicleData.vehicleCategory}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label>Fuel Type</label>
                        <input
                            type="text"
                            name="fuelType"
                            placeholder="Fuel Type"
                            value={vehicleData.fuelType}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label>Status</label>
                        <input
                            type="text"
                            name="status"
                            placeholder="Status"
                            value={vehicleData.status}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label>Remarks</label>
                        <input
                            type="text"
                            name="remarks"
                            placeholder="Remarks"
                            value={vehicleData.remarks}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-field">
                        <label>Staff ID</label>
                        <input
                            type="text"
                            name="staffId"
                            placeholder="Staff ID"
                            value={vehicleData.staffId}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        {isEditing ? "Update Vehicle" : "Submit"}
                    </button>

                    <button type="button" className="close-modal" onClick={handleClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VehicleForm;
