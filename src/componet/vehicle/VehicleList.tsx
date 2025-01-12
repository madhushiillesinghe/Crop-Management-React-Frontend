import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/Store.ts";
import {deleteVehicle, setCurrentVehicleCode, toggleVehicleForm} from "../../reducer/VehicleReducer.ts";

const VehicleList: React.FC = () => {
    const dispatch = useDispatch();
    const vehicleItems = useSelector((state: RootState) => state.vehicle.vehicleItems);

    const handleEdit = (vehicleCode: string) => {
        dispatch(setCurrentVehicleCode(vehicleCode));
        dispatch(toggleVehicleForm());
    };

    const handleDelete = (vehicleCode: string) => {
        dispatch(deleteVehicle(vehicleCode));
    };

    return (
        <div className="vehicle-list">
            <h3>Vehicle List</h3>
            <div className="vehicle-cards">
                {vehicleItems.map((vehicle) => (
                    <div key={vehicle.vehicleCode} className="vehicle-card">
                        <p>Code: {vehicle.vehicleCode}</p>
                        <p>Plate No: {vehicle.licensePlateNo}</p>
                        <p>Category: {vehicle.vehicleCategory}</p>
                        <p>Fuel Type:{vehicle.fuelType}</p>
                        <p>Status:{vehicle.status}</p>
                        <p>Remarks:{vehicle.remarks}</p>
                        <div className="vehicle-actions">
                            <button onClick={() => handleEdit(vehicle.vehicleCode)} className="edit-button">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(vehicle.vehicleCode)} className="delete-button">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VehicleList;
