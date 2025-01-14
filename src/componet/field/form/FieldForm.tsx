import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/Store.ts";
import "../../../css/componet/field.css";
import { addField, editField, toggleFieldForm } from "../../../reducer/FieldReducer.ts";
import ReusableForm from "../../Form/CommonForm.tsx";

const FieldForm: React.FC = () => {
    const dispatch = useDispatch();
    const fieldItems = useSelector((state: RootState) => state.field.fieldItems);
    const showForm = useSelector((state: RootState) => state.field.showForm);
    const currentFieldCode = useSelector((state: RootState) => state.field.currentFieldCode);

    const fields = [
        { name: "fieldCode", label: "Field Code", type: "text", placeholder: "Field Code", required: true },
        { name: "fieldName", label: "Field Name", type: "text", placeholder: "Field Name", required: true },
        { name: "fieldLocation", label: "Field Location", type: "text", placeholder: "Field Location", required: true },
        { name: "extentSize", label: "Extent Size (acres)", type: "number", placeholder: "Extent Size", required: true },
        { name: "fieldImage1", label: "Field Image 1 URL", type: "text", placeholder: "Field Image 1 URL" },
        { name: "fieldImage2", label: "Field Image 2 URL", type: "text", placeholder: "Field Image 2 URL" },
    ];

    const initialValues = currentFieldCode
        ? fieldItems.find((field) => field.fieldCode === currentFieldCode) || {}
        : {
            fieldCode: "",
            fieldName: "",
            fieldLocation: "",
            extentSize: "",
            fieldImage1: "",
            fieldImage2: "",
        };

    const handleSubmit = (values: Record<string, any>) => {
        const newField = {
            ...values,
            extentSize: parseFloat(values.extentSize), // Convert extentSize to number
            staffList: [],
            cropList: [],
            monitoringLogs: [],
        };

        if (currentFieldCode) {
            dispatch(editField(newField));
        } else {
            dispatch(addField(newField));
        }
        handleClose();
    };

    const handleClose = () => {
        dispatch(toggleFieldForm());
    };

    return (
        showForm && (
            <ReusableForm
                fields={fields}
                initialValues={initialValues}
                onSubmit={handleSubmit}
                onClose={handleClose}
            />
        )
    );
};

export default FieldForm;
