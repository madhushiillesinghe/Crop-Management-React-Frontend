import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store.ts';

import AddVehicleButton from "../componet/vehicle/button/AddVehicleButton.tsx";
import VehicleForm from "../componet/vehicle/form/VehicleForm.tsx";
import VehicleList from "../componet/vehicle/VehicleList.tsx";

const VehiclePage: React.FC = () => {
    const showForm = useSelector((state: RootState) => state.vehicle.showForm);

    return (

            <div>
                <h1>Vehicle Management</h1>
                <AddVehicleButton/>
                {showForm && <VehicleForm/>}
                <VehicleList/>
            </div>
            );
            };

            export default VehiclePage;
