import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/Store.ts";
import { Crop } from "../../../model/Crop.ts";
import "../../../css/componet/Crop.css"; // Ensure correct styling path
import { addCrop, toggleForm, editCrop, setCurrentCropId } from "../../../reducer/CropReducer.ts";

const CropForm: React.FC = () => {
    const [formValues, setFormValues] = useState({
        code: '',
        commonName: '',
        scientificName: '',
        cropImage: '',
        category: '',
        season: '',
        fieldCode: '',
    });

    const [isEditing, setIsEditing] = useState(false);
    const crops = useSelector((state: RootState) => state.crop.crops);
    const showForm = useSelector((state: RootState) => state.crop.showForm);
    const currentCropId = useSelector((state: RootState) => state.crop.currentCropId);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentCropId) {
            const cropToEdit = crops.find((crop) => crop.code === currentCropId);
            if (cropToEdit) {
                setFormValues({
                    code: cropToEdit.code,
                    commonName: cropToEdit.commonName,
                    scientificName: cropToEdit.scientificName,
                    cropImage: cropToEdit.cropImage,
                    category: cropToEdit.category,
                    season: cropToEdit.season,
                    fieldCode: cropToEdit.fieldCode,
                });
                setIsEditing(true);
            }
        } else {
            resetForm();
        }
    }, [currentCropId, crops]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newCrop: Crop = new Crop(
            formValues.code,
            formValues.commonName,
            formValues.scientificName,
            formValues.cropImage,
            formValues.category,
            formValues.season,
            formValues.fieldCode,
            []
        );

        if (isEditing) {
            dispatch(editCrop(newCrop));
        } else {
            dispatch(addCrop(newCrop));
        }

        resetForm();
    };

    const resetForm = () => {
        setFormValues({
            code: '',
            commonName: '',
            scientificName: '',
            cropImage: '',
            category: '',
            season: '',
            fieldCode: '',
        });
        setIsEditing(false);
        dispatch(toggleForm());
        dispatch(setCurrentCropId(null)); // Reset currentCropId after submitting
    };

    const handleClose = () => {
        resetForm();
    };

    return (
        <div className={`modal-overlay ${showForm ? 'show' : ''}`}>
            <div className="modal-content">
                <form onSubmit={handleSubmit} className="crop-form">
                    <h2>{isEditing ? "Edit Crop" : "Add New Crop"}</h2>
                    <div className="form-field">
                        <label>Code</label>
                        <input
                            type="text"
                            name="code"
                            placeholder="Code"
                            value={formValues.code}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label>Common Name</label>
                        <input
                            type="text"
                            name="commonName"
                            placeholder="Common Name"
                            value={formValues.commonName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label>Scientific Name</label>
                        <input
                            type="text"
                            name="scientificName"
                            placeholder="Scientific Name"
                            value={formValues.scientificName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label>Crop Image URL</label>
                        <input
                            type="text"
                            name="cropImage"
                            placeholder="Crop Image URL"
                            value={formValues.cropImage}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label>Category</label>
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={formValues.category}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label>Season</label>
                        <input
                            type="text"
                            name="season"
                            placeholder="Season"
                            value={formValues.season}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label>Field Code</label>
                        <input
                            type="text"
                            name="fieldCode"
                            placeholder="Field Code"
                            value={formValues.fieldCode}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        {isEditing ? "Update Crop" : "Submit"}
                    </button>
                    <button type="button" className="close-modal" onClick={handleClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CropForm;
