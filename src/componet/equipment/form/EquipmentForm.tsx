import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/Store.ts";
import "../../../css/componet/Equipment.css";
import { addEquipment, editEquipment, toggleEquipmentForm } from "../../../reducer/EquipmentReducer.ts";
import { Equipment } from "../../../model/Equipment.ts";
import ReusableForm from "../../Form/CommonForm.tsx";

const EquipmentForm: React.FC = () => {
    const equipmentItems = useSelector((state: RootState) => state.equipment.equipmentItems);
    const showForm = useSelector((state: RootState) => state.equipment.showForm);
    const currentEquipmentId = useSelector((state: RootState) => state.equipment.currentEquipmentId);
    const dispatch = useDispatch();

    const initialValues = currentEquipmentId
        ? equipmentItems.find((equipment) => equipment.id === currentEquipmentId) || {
        id: '',
        name: '',
        type: '',
        status: '',
        fieldCode: '',
        staffId: '',
    }
        : {
            id: '',
            name: '',
            type: '',
            status: '',
            fieldCode: '',
            staffId: '',
        };

    const fields = [
        { name: 'id', label: 'ID', type: 'text', placeholder: 'ID' },
        { name: 'name', label: 'Name', type: 'text', placeholder: 'Name' },
        { name: 'type', label: 'Type', type: 'text', placeholder: 'Type' },
        { name: 'status', label: 'Status', type: 'text', placeholder: 'Status' },
        { name: 'fieldCode', label: 'Field Code', type: 'text', placeholder: 'Field Code' },
        { name: 'staffId', label: 'Staff ID', type: 'text', placeholder: 'Staff ID' },
    ];

    const handleSubmit = (values: Record<string, string>) => {
        const newEquipment: Equipment = new Equipment(
            values.id,
            values.name,
            values.type,
            values.status,
            values.fieldCode,
            values.staffId
        );

        if (currentEquipmentId) {
            dispatch(editEquipment(newEquipment));
        } else {
            dispatch(addEquipment(newEquipment));
        }
        handleClose();
    };

    const handleClose = () => {
        dispatch(toggleEquipmentForm());
    };

    return (
        <ReusableForm
            initialValues={initialValues}
            fields={fields}
            onSubmit={handleSubmit}
            onClose={handleClose}
            isEditing={!!currentEquipmentId}
            showForm={showForm}
        />
    );
};

export default EquipmentForm;
