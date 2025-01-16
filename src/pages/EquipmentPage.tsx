import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store.ts';

import EquipmentButton from "../componet/equipment/button/AddEquipmentButton.tsx";
import EquipmentForm from "../componet/equipment/form/EquipmentForm.tsx";
import EquipmentList from "../componet/equipment/EquipmentList.tsx";
import TopBar from "../componet/TopBar.tsx";

const EquipmentPage: React.FC = () => {
    const showForm = useSelector((state: RootState) => state.equipment.showForm);

    return (
        <div className="min-h-screen bg-gray-100">
            <TopBar
            />
            <div>
                <h1>Equipment Management</h1>
                <EquipmentButton/>
                {showForm && <EquipmentForm/>}
                <EquipmentList/>
            </div>
        </div>
            );
            };

            export default EquipmentPage;
