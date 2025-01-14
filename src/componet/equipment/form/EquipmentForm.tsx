// EquipmentForm.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/Store.ts";
import { Equipment } from "../../../model/Equipment.ts";
import "../../../css/componet/Equipment.css";
import { addEquipment, toggleEquipmentForm, editEquipment } from "../../../reducer/EquipmentReducer.ts";

const EquipmentForm: React.FC = () => {
    const [formValues, setFormValues] = useState({
        id: '',
        name: '',
        type: '',
        status: '',
        fieldCode: '',
        staffId: '',
    });

    const [isEditing, setIsEditing] = useState(false);
    const equipmentItems = useSelector((state: RootState) => state.equipment.equipmentItems);
    const showForm = useSelector((state: RootState) => state.equipment.showForm);
    const currentEquipmentId = useSelector((state: RootState) => state.equipment.currentEquipmentId);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentEquipmentId) {
            const equipmentToEdit = equipmentItems.find((equipment) => equipment.id === currentEquipmentId);
            if (equipmentToEdit) {
                setFormValues({
                    id: equipmentToEdit.id,
                    name: equipmentToEdit.name,
                    type: equipmentToEdit.type,
                    status: equipmentToEdit.status,
                    fieldCode: equipmentToEdit.fieldCode,
                    staffId: equipmentToEdit.staffId,
                });
                setIsEditing(true);
            }
        } else {
            resetForm();
        }
    }, [currentEquipmentId, equipmentItems]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newEquipment: Equipment = new Equipment(
            formValues.id,
            formValues.name,
            formValues.type,
            formValues.status,
            formValues.fieldCode,
            formValues.staffId
        );

        if (isEditing) {
            dispatch(editEquipment(newEquipment));
        } else {
            dispatch(addEquipment(newEquipment));
        }

        resetForm();
    };

    const resetForm = () => {
        setFormValues({
            id: '',
            name: '',
            type: '',
            status: '',
            fieldCode: '',
            staffId: '',
        });
        setIsEditing(false);
        dispatch(toggleEquipmentForm());
    };

    const handleClose = () => {
        resetForm();
    };

    return (
        <div className={`modal-overlay ${showForm ? 'show' : ''}`}>
            <div className="modal-content">
                <form onSubmit={handleSubmit} className="equipment-form">
                    <h2>{isEditing ? "Edit Equipment" : "Add New Equipment"}</h2>

                    <div className="form-field">
                        <label>ID</label>
                        <input
                            type="text"
                            name="id"
                            placeholder="ID"
                            value={formValues.id}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formValues.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-field">
                        <label>Type</label>
                        <input
                            type="text"
                            name="type"
                            placeholder="Type"
                            value={formValues.type}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-field">
                        <label>Status</label>
                        <input
                            type="text"
                            name="status"
                            placeholder="Status"
                            value={formValues.status}
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

                    <div className="form-field">
                        <label>Staff ID</label>
                        <input
                            type="text"
                            name="staffId"
                            placeholder="Staff ID"
                            value={formValues.staffId}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        {isEditing ? "Update Equipment" : "Submit"}
                    </button>

                    <button type="button" className="close-modal" onClick={handleClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EquipmentForm;
