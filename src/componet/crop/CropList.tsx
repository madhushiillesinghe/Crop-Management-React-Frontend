import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/Store.ts";
import { deleteCrop, toggleForm, setCurrentCropId } from "../../reducer/CropReducer.ts";


const CropList: React.FC = () => {
    const crops = useSelector((state: RootState) => state.crop.crops);
    const dispatch = useDispatch();

    const handleEdit = (cropId: string) => {
        dispatch(setCurrentCropId(cropId));
        dispatch(toggleForm());
    };

    const handleDelete = (cropId: string) => {
        dispatch(deleteCrop(cropId));
    };

    return (
        <div className="p-4 crop-list">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Existing Crops</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 crop-cards">
                {crops.map((crop) => (
                    <div
                        key={crop.code}
                        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col crop-card"
                    >
                        <img
                            src={crop.cropImage}
                            alt={crop.commonName}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4">
                            <h4 className="text-lg font-bold text-gray-800">{crop.commonName}</h4>
                            <p className="text-sm text-gray-600 italic">
                                {crop.scientificName}
                            </p>
                            <p className="text-sm text-gray-600">Category: {crop.category}</p>
                            <p className="text-sm text-gray-600">Season: {crop.season}</p>
                            <p className="text-sm text-gray-600">Field: {crop.fieldCode}</p>

                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={() => handleEdit(crop.code)}
                                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(crop.code)}
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default CropList;
