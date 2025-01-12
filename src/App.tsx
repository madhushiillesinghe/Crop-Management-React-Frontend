import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Store.ts';
import CropPage from './pages/CropPage.tsx';
import EquipmentPage from './pages/EquipmentPage.tsx';
import FieldPage from "./pages/FieldPage.tsx";
import VehiclePage from "./pages/VehiclePage.tsx";
import StaffPage from "./pages/StaffPage.tsx";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            {/* Navigation Links */}
                            <li>
                                <Link to="/equipment">Equipment</Link>
                            </li>
                            <li>
                                <Link to="/crop">Crop</Link>
                            </li>
                            <li>
                                <Link to="/field">Field</Link>
                            </li>
                            <li>
                                <Link to="/vehicle">Vehicle</Link>
                            </li>
                            <li>
                                <Link to="/staff">Staff</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        {/* Define Routes */}
                        <Route path="/equipment" element={<EquipmentPage />} />
                        <Route path="/crop" element={<CropPage />} />
                        <Route path="/field" element={<FieldPage />} />
                        <Route path="/vehicle" element={<VehiclePage />} />
                        <Route path="/staff" element={<StaffPage />} />


                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
