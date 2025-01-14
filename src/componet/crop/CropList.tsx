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
        <div className="crop-list">
            <h3>Existing Crops</h3>
            <div className="crop-cards">
                {crops.map((crop) => (
                    <div key={crop.code} className="crop-card">
                        <img src={crop.cropImage} alt={crop.commonName} />
                        <div className="crop-details">
                            <h4>{crop.commonName}</h4>
                            <p>{crop.scientificName}</p>
                            <p>{crop.category}</p>
                            <p>{crop.season}</p>
                            <p>{crop.fieldCode}</p>

                            <div className="crop-actions">
                                <button onClick={() => handleEdit(crop.code)} className="edit-button">
                                    <i className="fa fa-pencil" /> Edit
                                </button>
                                <button onClick={() => handleDelete(crop.code)} className="delete-button">
                                    <i className="fa fa-trash" /> Delete
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
