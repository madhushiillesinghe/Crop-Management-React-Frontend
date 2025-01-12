// component/field/FieldList.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/Store.ts';
import { deleteField, setCurrentFieldCode, toggleFieldForm } from '../../reducer/FieldReducer.ts';

const FieldList: React.FC = () => {
    const dispatch = useDispatch();

    const fieldItems = useSelector((state: RootState) => state.field.fieldItems);

    const handleEdit = (fieldCode: string) => {
        dispatch(setCurrentFieldCode(fieldCode));
        dispatch(toggleFieldForm());
    };

    const handleDelete = (fieldCode: string) => {
        dispatch(deleteField(fieldCode));
    };

    return (
        <div className="field-list">
            <h3>Field List</h3>
            <div className="field-cards">
                {fieldItems.length > 0 ? (
                    fieldItems.map((field) => (
                        <div key={field.fieldCode} className="field-card">
                            <img src={field.fieldImage1 || 'https://via.placeholder.com/150'} alt={field.fieldName} />
                            <div className="field-details">
                                <h4>{field.fieldName}</h4>
                                <p>Location: {field.fieldLocation}</p>
                                <p>Extent Size: {field.extentSize} acres</p>


                                <div className="field-actions">
                                    <button onClick={() => handleEdit(field.fieldCode)} className="edit-button">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(field.fieldCode)} className="delete-button">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No fields available. Add some fields!</p>
                )}
            </div>
        </div>
    );
};

export default FieldList;
