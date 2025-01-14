import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Store.ts';
import { deleteField, setCurrentFieldCode, toggleFieldForm } from '../../reducer/FieldReducer.ts';
import backgroundImage from "../../assets/card-background/fieldCardBackground.jpg";
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing icons

const FieldList: React.FC = () => {
    const dispatch = useDispatch();
    const fieldItems = useSelector((state: RootState) => state.fieldData.fieldItems);

    const handleEdit = (fieldCode: string) => {
        dispatch(setCurrentFieldCode(fieldCode));
        dispatch(toggleFieldForm());
    };

    const handleDelete = (fieldCode: string) => {
        dispatch(deleteField(fieldCode));
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen field-list">
            <h3 className="text-2xl font-bold text-center mb-6">Field List</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 field-cards">
                {fieldItems.length > 0 ? (
                    fieldItems.map((field) => (
                        <div key={field.fieldCode} className="bg-white shadow-lg rounded-lg overflow-hidden field-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
                            <img
                                src={field.fieldImage1 || 'https://via.placeholder.com/150'}
                                alt={field.fieldName}
                                className="w-full h-32 object-cover"
                            />
                            <div className="p-4">
                                <h1 className="text-xl">{field.fieldName}</h1>
                                <p className="text-gray-600">Code: {field.fieldCode}</p>
                                <p className="text-gray-600">Location: {field.fieldLocation}</p>
                                <p className="text-gray-600">Extent Size: {field.extentSize} acres</p>
                                <div className="mt-4 flex justify-between">
                                    <button
                                        onClick={() => handleEdit(field.fieldCode)}
                                        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(field.fieldCode)}
                                        className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No fields available. Add some fields!</p>
                )}
            </div>
        </div>
    );
};

export default FieldList;
