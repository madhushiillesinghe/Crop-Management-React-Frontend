import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store.ts';

import AddFieldButton from "../componet/field/button/AddFieldButton.tsx";
import FieldForm from "../componet/field/form/FieldForm.tsx";
import FieldList from "../componet/field/FieldList.tsx";
import TopBar from "../componet/TopBar.tsx";


const FieldPage: React.FC = () => {
    const showForm = useSelector((state: RootState) => state.fieldData.showForm);

    return (
        <div className="min-h-screen bg-gray-100">
            <TopBar
            />
            <div>
                <h1>Field Management</h1>
                <AddFieldButton/>
                {showForm && <FieldForm/>}
                <FieldList/>
            </div>
        </div>
            );
            };

            export default FieldPage;
