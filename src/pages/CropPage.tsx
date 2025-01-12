import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store.ts';
import CropButton from "../componet/crop/button/AddButton.tsx";
import CropForm from "../componet/crop/form/CropForm.tsx";
import CropList from "../componet/crop/CropList.tsx";


const CropPage: React.FC = () => {
    const showForm = useSelector((state: RootState) => state.crop.showForm);

    return (
        <div>
            <h1>Crop Management</h1>
            <CropButton />
            {showForm && <CropForm />}
            <CropList />
        </div>
    );
};

export default CropPage;
