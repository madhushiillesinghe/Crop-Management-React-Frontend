import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import CropForm from "../componet/crop/form/CropForm.tsx";
import CropButton from "../componet/crop/button/AddCropButton.tsx";
import CropList from "../componet/crop/CropList.tsx";


const CropPage: React.FC = () => {
    const showForm = useSelector((state: RootState) => state.crop.showForm);

    return (


            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Crop Management</h1>
                <CropButton />
                {showForm && <CropForm />}
                <CropList />
            </div>
    );
};

export default CropPage;
