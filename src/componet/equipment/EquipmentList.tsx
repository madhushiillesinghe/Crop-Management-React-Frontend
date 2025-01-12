import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/Store.ts';
import {deleteEquipment, setCurrentEquipmentId, toggleEquipmentForm} from "../../reducer/EquipmentReducer.ts";

const EquipmentList: React.FC = () => {
    const dispatch = useDispatch();

    // Fetch equipment data from the Redux store
    const equipmentItems = useSelector((state: RootState) => state.equipment.equipmentItems);

    // Edit handler
    const handleEdit = (equipmentId: string) => {
        dispatch(setCurrentEquipmentId(equipmentId)); // Set the current equipment ID
        dispatch(toggleEquipmentForm()); // Open the equipment form
    };

    // Delete handler
    const handleDelete = (equipmentId: string) => {
        dispatch(deleteEquipment(equipmentId)); // Remove equipment from the list
    };

    return (
        <div className="equipment-list">
            <h3>Equipment List</h3>
            <div className="equipment-cards">
                {equipmentItems.length > 0 ? (
                    equipmentItems.map((equipment) => (
                        <div key={equipment.id} className="equipment-card">
                            <div className="equipment-details">
                                <h4>{equipment.name}</h4>
                                <p>Type: {equipment.type}</p>
                                <p>Status: {equipment.status}</p>
                                <p>Field Code: {equipment.fieldCode}</p>

                                <div className="equipment-actions">
                                    <button
                                        onClick={() => handleEdit(equipment.id)}
                                        className="edit-button"
                                    >
                                        <i className="fa fa-pencil" /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(equipment.id)}
                                        className="delete-button"
                                    >
                                        <i className="fa fa-trash" /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No equipment available. Please add some equipment.</p>
                )}
            </div>
        </div>
    );
};

export default EquipmentList;
