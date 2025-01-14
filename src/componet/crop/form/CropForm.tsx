import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/Store.ts";
import "../../../css/componet/Crop.css";
import { addCrop, editCrop, toggleForm, setCurrentCropId } from "../../../reducer/CropReducer.ts";
import { Crop } from "../../../model/Crop.ts";
import ReusableForm from "../../Form/CommonForm.tsx";

const CropForm: React.FC = () => {
    const crops = useSelector((state: RootState) => state.crop.crops);
    const showForm = useSelector((state: RootState) => state.crop.showForm);
    const currentCropId = useSelector((state: RootState) => state.crop.currentCropId);
    const dispatch = useDispatch();

    const initialValues = currentCropId
        ? crops.find((crop) => crop.code === currentCropId) || {
        code: '',
        commonName: '',
        scientificName: '',
        cropImage: '',
        category: '',
        season: '',
        fieldCode: '',
    }
        : {
            code: '',
            commonName: '',
            scientificName: '',
            cropImage: '',
            category: '',
            season: '',
            fieldCode: '',
        };

    const fields = [
        { name: 'code', label: 'Code', type: 'text', placeholder: 'Code' },
        { name: 'commonName', label: 'Common Name', type: 'text', placeholder: 'Common Name' },
        { name: 'scientificName', label: 'Scientific Name', type: 'text', placeholder: 'Scientific Name' },
        { name: 'cropImage', label: 'Crop Image URL', type: 'text', placeholder: 'Crop Image URL' },
        { name: 'category', label: 'Category', type: 'text', placeholder: 'Category' },
        { name: 'season', label: 'Season', type: 'text', placeholder: 'Season' },
        { name: 'fieldCode', label: 'Field Code', type: 'text', placeholder: 'Field Code' },
    ];

    const handleSubmit = (values: Record<string, string>) => {
        const newCrop: Crop = new Crop(
            values.code,
            values.commonName,
            values.scientificName,
            values.cropImage,
            values.category,
            values.season,
            values.fieldCode,
            []
        );

        if (currentCropId) {
            dispatch(editCrop(newCrop));
        } else {
            dispatch(addCrop(newCrop));
        }
        handleClose();
    };

    const handleClose = () => {
        dispatch(toggleForm());
        dispatch(setCurrentCropId(null));
    };

    return (
        <ReusableForm
            initialValues={initialValues}
            fields={fields}
            onSubmit={handleSubmit}
            onClose={handleClose}
            isEditing={!!currentCropId}
            showForm={showForm}
        />
    );
};

export default CropForm;
