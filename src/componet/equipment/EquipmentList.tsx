import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/Store.ts';
import { deleteEquipment, setCurrentEquipmentId, toggleEquipmentForm } from '../../reducer/EquipmentReducer.ts';
import backgroundImage from '../../assets/card-background/equipmentcardBackground.png'; // Import the image


const EquipmentList: React.FC = () => {
    const dispatch = useDispatch();
    const equipmentItems = useSelector((state: RootState) => state.equipment.equipmentItems);

    const handleEdit = (equipmentId: string) => {
        dispatch(setCurrentEquipmentId(equipmentId));
        dispatch(toggleEquipmentForm());
    };

    const handleDelete = (equipmentId: string) => {
        dispatch(deleteEquipment(equipmentId));
    };

    return (
        <div className="p-4 equipment-list">
            <h3 className="text-xl font-bold mb-4">Equipment List</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 equipment-cards">
                {equipmentItems.length > 0 ? (
                    equipmentItems.map((equipment) => (
                        <div
                            key={equipment.id}
                            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 equipment-card"
                            style={{backgroundImage: `url(${backgroundImage})`}}

                        >
                            <h1 className="text-lg font-semibold mb-2">{equipment.name}</h1>
                            <p className="text-gray-600">Type: {equipment.type}</p>
                            <p className="text-gray-600">Status: {equipment.status}</p>
                            <p className="text-gray-600">Field Code: {equipment.fieldCode}</p>
                            <div className="mt-4 flex justify-between">
                                <button
                                    onClick={() => handleEdit(equipment.id)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    <i className="fa fa-pencil mr-2"/> Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(equipment.id)}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    <i className="fa fa-trash mr-2"/> Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No equipment available. Please add some equipment.</p>
                )}
            </div>
        </div>
    );
};

export default EquipmentList;
