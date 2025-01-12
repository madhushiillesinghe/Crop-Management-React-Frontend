import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Store.ts';
import CropPage from './pages/CropPage.tsx';
import EquipmentPage from './pages/EquipmentPage.tsx';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            {/* Navigation Links */}
                            <li>
                                <Link to="/equipment">Equipment Page</Link>
                            </li>
                            <li>
                                <Link to="/crop">Crop Page</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        {/* Define Routes */}
                        <Route path="/equipment" element={<EquipmentPage />} />
                        <Route path="/crop" element={<CropPage />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
