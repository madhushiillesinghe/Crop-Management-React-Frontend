import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/Store.ts";
import "../../../css/componet/field.css";
import { addField, editField, toggleFieldForm } from "../../../reducer/FieldReducer.ts";

const FieldForm: React.FC = () => {
    const [formValues, setFormValues] = useState({
        fieldCode: '',
        fieldName: '',
        fieldLocation: '',
        extentSize: '',
        fieldImage1: '',
        fieldImage2: '',
    });

    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();
    const fieldItems = useSelector((state: RootState) => state.field.fieldItems);
    const showForm = useSelector((state: RootState) => state.field.showForm);
    const currentFieldCode = useSelector((state: RootState) => state.field.currentFieldCode);

    useEffect(() => {
        if (currentFieldCode) {
            const fieldToEdit = fieldItems.find((field) => field.fieldCode === currentFieldCode);
            if (fieldToEdit) {
                setFormValues({
                    fieldCode: fieldToEdit.fieldCode,
                    fieldName: fieldToEdit.fieldName,
                    fieldLocation: fieldToEdit.fieldLocation,
                    extentSize: fieldToEdit.extentSize.toString(),
                    fieldImage1: fieldToEdit.fieldImage1,
                    fieldImage2: fieldToEdit.fieldImage2,
                });
                setIsEditing(true);
            }
        } else {
            resetForm();
        }
    }, [currentFieldCode, fieldItems]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newField = {
            ...formValues,
            extentSize: parseFloat(formValues.extentSize), // Convert extentSize to number
            staffList: [],
            cropList: [],
            monitoringLogs: [],
        };

        if (isEditing) {
            dispatch(editField(newField));
        } else {
            dispatch(addField(newField));
        }

        resetForm();
    };

    const resetForm = () => {
        setFormValues({
            fieldCode: '',
            fieldName: '',
            fieldLocation: '',
            extentSize: '',
            fieldImage1: '',
            fieldImage2: '',
        });
        setIsEditing(false);
        dispatch(toggleFieldForm());
    };

    const handleClose = () => {
        resetForm();
    };

    return (
        <div className={`modal-overlay ${showForm ? 'show' : ''}`}>
            <div className="modal-content">
                <form onSubmit={handleSubmit} className="field-form">
                    <h2>{isEditing ? "Edit Field" : "Add New Field"}</h2>

                    <div className="form-field">
                        <label>Field Code</label>
                        <input
                            type="text"
                            name="fieldCode"
                            placeholder="Field Code"
                            value={formValues.fieldCode}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label>Field Name</label>
                        <input
                            type="text"
                            name="fieldName"
                            placeholder="Field Name"
                            value={formValues.fieldName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label>Field Location</label>
                        <input
                            type="text"
                            name="fieldLocation"
                            placeholder="Field Location"
                            value={formValues.fieldLocation}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label>Extent Size (acres)</label>
                        <input
                            type="number"
                            name="extentSize"
                            placeholder="Extent Size"
                            value={formValues.extentSize}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label>Field Image 1 URL</label>
                        <input
                            type="text"
                            name="fieldImage1"
                            placeholder="Field Image 1 URL"
                            value={formValues.fieldImage1}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-field">
                        <label>Field Image 2 URL</label>
                        <input
                            type="text"
                            name="fieldImage2"
                            placeholder="Field Image 2 URL"
                            value={formValues.fieldImage2}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        {isEditing ? "Update Field" : "Submit"}
                    </button>

                    <button type="button" className="close-modal" onClick={handleClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FieldForm;
