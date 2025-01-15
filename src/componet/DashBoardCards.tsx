// InfoCard.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface InfoCardProps {
    value: string | number;
    label: string;
    icon: IconDefinition;
}

const InfoCard: React.FC<InfoCardProps> = ({ value, label, icon }) => {
    return (
        <div
            style={{
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '200px',
            }}
        >
            <div>
                <h3 style={{ margin: '0', color: '#28a745',fontSize:"40px",fontWeight:"500" }}>{value}</h3>
                <p style={{ margin: '0', color: '#6c757d',fontSize:"16px" ,fontWeight:"600" }}>{label}</p>
            </div>
            <FontAwesomeIcon icon={icon} style={{ fontSize: '40px', color: '#28a745' }} />
        </div>
    );
};

export default InfoCard;
