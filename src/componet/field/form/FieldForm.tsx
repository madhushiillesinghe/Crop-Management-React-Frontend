import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/Store.ts";
import "../../../css/componet/field.css";
import { FieldData } from "../../../model/Field.ts";
import { addField, editField, toggleFieldForm } from "../../../reducer/FieldReducer.ts";
import ReusableForm from "../../Form/CommonForm.tsx";

const FieldForm: React.FC = () => {
    const dispatch = useDispatch();
    const fieldItems = useSelector((state: RootState) => state.fieldData.fieldItems);
    const showForm = useSelector((state: RootState) => state.fieldData.showForm);
    const currentFieldCode = useSelector((state: RootState) => state.fieldData.currentFieldCode);

    const fields = [
        { name: "fieldCode", label: "Field Code", type: "text", placeholder: "Field Code", required: true },
        { name: "fieldName", label: "Field Name", type: "text", placeholder: "Field Name", required: true },
        { name: "fieldLocation", label: "Field Location", type: "text", placeholder: "Field Location", required: true },
        { name: "extentSize", label: "Extent Size (acres)", type: "number", placeholder: "Extent Size", required: true },
        { name: "fieldImage1", label: "Field Image 1 URL", type: "text", placeholder: "Field Image 1 URL" },
        { name: "fieldImage2", label: "Field Image 2 URL", type: "text", placeholder: "Field Image 2 URL" },

    ];

    const initialValues = currentFieldCode
        ? fieldItems.find((field) => field.fieldCode === currentFieldCode) || {

            fieldCode: "",
            fieldName: "",
            fieldLocation: "",
            extentSize: "",
            fieldImage1: "",
            fieldImage2: "",

        }
        : {
            fieldCode: "",
            fieldName: "",
            fieldLocation: "",
            extentSize: "",
            fieldImage1: "",
            fieldImage2: "",

    };

    const handleSubmit = (values: Record<string, string>) => {
        const newField:FieldData=new FieldData(
            values.fieldCode,
            values.fieldName,
            values.fieldLocation,
            values.extentSize,
            values.fieldImage1,
            values.fieldImage2,
            [],
            [],
            []

        );

        if (currentFieldCode) {
            dispatch(editField(newField)); // Update field with equipment
        } else {
            dispatch(addField(newField)); // Add new field with equipment
        }
        handleClose();
    };

    const handleClose = () => {
        dispatch(toggleFieldForm());
    };

    return (

            <ReusableForm
                fields={fields}
                initialValues={initialValues}
                onSubmit={handleSubmit}
                onClose={handleClose}
                isEditing={!!currentFieldCode}
                showForm={showForm}
            />
    );
};

export default FieldForm;
