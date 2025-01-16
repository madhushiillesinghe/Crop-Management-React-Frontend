// TopBar.tsx
import "../css/Topbar.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import {faBell, faUser, } from "@fortawesome/free-solid-svg-icons";

const TopBar: React.FC = () => {
    const [dateTime, setDateTime] = useState<string>("");

    // Function to update date and time dynamically
    const updateDateTime = () => {
        const now = new Date();
        const formattedDateTime = now.toLocaleString(); // Formats date and time
        setDateTime(formattedDateTime);
    };

    useEffect(() => {
        const interval = setInterval(updateDateTime, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-md topbar">
            {/* Left side: Name with green shadow */}
            <div className="text-2xl font-bold text-gray-800 text-shadow-md title">
                GREEN SHADOW
            </div>

            {/* Right side: Date, Time, Profile, and Notify icons */}
            <div className="flex items-center space-x-4 additional-data">
                {/* Date/Time */}
                <div className="text-sm text-gray-600 data-time">{dateTime}</div>

                {/* Profile Icon */}
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex notify-icon">
                    <FontAwesomeIcon icon={faBell} />
                </div>

                {/* Notify Icon */}
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center user-icon">
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
