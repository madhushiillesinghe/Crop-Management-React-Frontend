import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store.ts';

import AddFieldButton from "../componet/field/button/AddFieldButton.tsx";
import FieldForm from "../componet/field/form/FieldForm.tsx";
import FieldList from "../componet/field/FieldList.tsx";


const FieldPage: React.FC = () => {
    const showForm = useSelector((state: RootState) => state.fieldData.showForm);

    return (

            <div>
                <h1>Field Management</h1>
                <AddFieldButton/>
                {showForm && <FieldForm/>}
                <FieldList/>
            </div>

            );
            };

            export default FieldPage;
