import React from 'react';
import { useDispatch } from 'react-redux';

interface ReusableButtonProps {
    label: string;
    onClickAction: () => void;
    className?: string; // Optional for custom styles
}

const ReusableButton: React.FC<ReusableButtonProps> = ({ label, onClickAction, className }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(onClickAction());
    };

    return (
        <button onClick={handleClick} className={className}>
            {label}
        </button>
    );
};

export default ReusableButton;
