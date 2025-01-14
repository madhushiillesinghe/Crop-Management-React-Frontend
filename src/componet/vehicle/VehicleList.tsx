import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/Store.ts";
import {deleteVehicle, setCurrentVehicleCode, toggleVehicleForm} from "../../reducer/VehicleReducer.ts";
import backgroundImage from "../../assets/card-background/vehiclecardBackground.jpg";

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
        <div className="p-6 bg-gray-100 min-h-screen vehicle-list">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Vehicle List</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 vehicle-cards">
                {vehicleItems.map((vehicle) => (
                    <div
                        key={vehicle.vehicleCode}
                        className="bg-white shadow-md rounded-lg p-4 border border-gray-200 vehicle-card"
                        style={{ backgroundImage: `url(${backgroundImage})` }}

                    >
                        <h4 className="text-lg font-semibold text-gray-700">Code: {vehicle.vehicleCode}</h4>
                        <p className="text-gray-600">Plate No: {vehicle.licensePlateNo}</p>
                        <p className="text-gray-600">Category: {vehicle.vehicleCategory}</p>
                        <p className="text-gray-600">Fuel Type: {vehicle.fuelType}</p>
                        <p className="text-gray-600">Status: {vehicle.status}</p>
                        <p className="text-gray-600">Remarks: {vehicle.remarks}</p>
                        <div className="mt-4 flex justify-between">
                            <button
                                onClick={() => handleEdit(vehicle.vehicleCode)}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(vehicle.vehicleCode)}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
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
