import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/Store.ts";
import '../../../css/componet/field.css';
import { addField, editField, toggleFieldForm } from "../../../reducer/FieldReducer.ts";

const FieldForm: React.FC = () => {
    const dispatch = useDispatch();

    const currentFieldCode = useSelector((state: RootState) => state.field.currentFieldCode);
    const fieldItems = useSelector((state: RootState) => state.field.fieldItems);

    const existingField = fieldItems.find(field => field.fieldCode === currentFieldCode);

    const [fieldData, setFieldData] = useState({
        fieldCode: existingField?.fieldCode || '',
        fieldName: existingField?.fieldName || '',
        fieldLocation: existingField?.fieldLocation || '',
        extentSize: existingField?.extentSize || 0,
        fieldImage1: existingField?.fieldImage1 || '',
        fieldImage2: existingField?.fieldImage2 || '',
    });

    useEffect(() => {
        if (existingField) {
            setFieldData({
                fieldCode: existingField.fieldCode,
                fieldName: existingField.fieldName,
                fieldLocation: existingField.fieldLocation,
                extentSize: existingField.extentSize,
                fieldImage1: existingField.fieldImage1,
                fieldImage2: existingField.fieldImage2,
            });
        }
    }, [existingField]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFieldData({ ...fieldData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentFieldCode) {
            dispatch(editField({
                ...fieldData,
                staffList: [],
                cropList: [],
                monitoringLogs: []
            }));
        } else {
            dispatch(addField({
                ...fieldData,
                staffList: [],
                cropList: [],
                monitoringLogs: []
            }));
        }
        dispatch(toggleFieldForm());
    };

    return (
        <form onSubmit={handleSubmit} className="field-form">
            <input
                type="text"
                name="fieldCode"
                placeholder="Field Code"
                value={fieldData.fieldCode}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="fieldName"
                placeholder="Field Name"
                value={fieldData.fieldName}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="fieldLocation"
                placeholder="Location"
                value={fieldData.fieldLocation}
                onChange={handleInputChange}
                required
            />
            <input
                type="number"
                name="extentSize"
                placeholder="Extent Size (acres)"
                value={fieldData.extentSize}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="fieldImage1"
                placeholder="Field Image 1 URL"
                value={fieldData.fieldImage1}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="fieldImage2"
                placeholder="Field Image 2 URL"
                value={fieldData.fieldImage2}
                onChange={handleInputChange}
            />
            <button type="submit">Save Field</button>
        </form>
    );
};

export default FieldForm;
