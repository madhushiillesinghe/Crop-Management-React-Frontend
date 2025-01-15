import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTractor,
    faSeedling,
    faCar,
    faUsers,
    faClipboardList,
    faTools,
    faCog,
    faSignOutAlt,
    faHome
} from '@fortawesome/free-solid-svg-icons';
import "../css/componet/SideBar.css";
import welcomeImage from '../assets/img.png'; // Import your image here

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">
                WELCOME
            </h2>
            {/* Welcome Back Image in Circle */}
            <div className="welcome-back">
                <img src={welcomeImage} alt="Welcome Back" className="welcome-image" />
            </div>

            <nav>
                <ul>

                    <li>
                        <NavLink to="/" activeClassName="active">
                            <FontAwesomeIcon icon={faHome} className="icon"/> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/equipment" activeClassName="active">
                            <FontAwesomeIcon icon={faTools} className="icon"/> Equipment
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/crop" activeClassName="active">
                            <FontAwesomeIcon icon={faSeedling} className="icon"/> Crop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/field" activeClassName="active">
                            <FontAwesomeIcon icon={faTractor} className="icon"/> Field
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/vehicle" activeClassName="active">
                            <FontAwesomeIcon icon={faCar} className="icon"/> Vehicle
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/staff" activeClassName="active">
                            <FontAwesomeIcon icon={faUsers} className="icon"/> Staff
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/log" activeClassName="active">
                            <FontAwesomeIcon icon={faClipboardList} className="icon"/> Logs
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* Settings and Signout at the bottom */}
            <nav className="bottom-nav">
                <ul>
                    <li>
                        <NavLink to="/settings" activeClassName="active">
                            <FontAwesomeIcon icon={faCog} className="icon" /> Settings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/signout">
                            <FontAwesomeIcon icon={faSignOutAlt} className="icon" style={{color: 'red'}}/> Sign Out
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
