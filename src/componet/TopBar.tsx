import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const TopBar: React.FC = () => {
    const [dateTime, setDateTime] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setDateTime(now.toLocaleString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[60px] bg-black shadow-lg flex items-center justify-between px-6">
            {/* Left Section: Date and Time */}
            <div className="text-black text-sm font-semibold">
                {dateTime}
            </div>

            {/* Right Section: Notification and User Logo */}
            <div className="flex items-center gap-6">
                {/* Notification Icon */}
                <FontAwesomeIcon icon={faBell} className="text-black text-lg cursor-pointer" />

                {/* User Logo */}
                <FontAwesomeIcon icon={faUserCircle} className="text-white text-3xl cursor-pointer" />

                {/* User Name with Green Shadow */}
                <span className="text-black font-semibold text-lg shadow-lg shadow-green-500/50">
                    User Name
                </span>
            </div>
        </div>
    );
};

export default TopBar;
