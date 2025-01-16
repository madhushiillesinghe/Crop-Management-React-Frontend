import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import { Crop } from "../model/Crop.ts";

interface CropListProps {
    searchQuery: string;
}

const CropList: React.FC<CropListProps> = ({ searchQuery }) => {
    const crops = useSelector((state: RootState) => state.crop.crops);

    const filteredCrops = crops.filter((crop: Crop) =>
        crop.commonName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="crop-list">
            <h3>Crops Available</h3>
            <div className="crop-cards">
                {filteredCrops.map(crop => (
                    <div key={crop.code} className="crop-card">
                        <img src={crop.cropImage} alt={crop.cropImage} />
                        <div className="crop-details">
                            <p>{crop.cropImage}</p>
                            <p>{crop.category}</p>
                            <p>{crop.season}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CropList;
