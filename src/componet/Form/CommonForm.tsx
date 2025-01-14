import React, { useState,useEffect } from 'react'; // Optional in React 17+ but good practice to import `useState` if needed


interface Field {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}

interface ReusableFormProps {
    initialValues: Record<string, string>;
    fields: Field[];
    onSubmit: (values: Record<string, string>) => void;
    onClose: () => void;
    isEditing: boolean;
    showForm: boolean;
}

const ReusableForm: React.FC<ReusableFormProps> = ({
                                                       initialValues,
                                                       fields,
                                                       onSubmit,
                                                       onClose,
                                                       isEditing,
                                                       showForm
                                                   }) => {
    const [formValues, setFormValues] = useState<Record<string, string>>(initialValues);

    useEffect(() => {
        setFormValues(initialValues);
    }, [initialValues]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formValues);
    };

    return (
        <div className={`modal-overlay ${showForm ? 'show' : ''}`}>
            <div className="modal-content">
                <form onSubmit={handleSubmit} className="reusable-form">
                    <h2>{isEditing ? "Edit" : "Add New"}</h2>
                    {fields.map((field) => (
                        <div className="form-field" key={field.name}>
                            <label>{field.label}</label>
                            <input
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formValues[field.name] || ''}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                    <button type="submit" className="submit-button">
                        {isEditing ? "Update" : "Submit"}
                    </button>
                    <button type="button" className="close-modal" onClick={onClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReusableForm;
