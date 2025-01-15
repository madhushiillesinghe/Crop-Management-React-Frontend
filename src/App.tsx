import React from 'react';
import { Provider } from 'react-redux';
import store from './store/Store.ts';
import CropPage from './pages/CropPage.tsx';
import EquipmentPage from './pages/EquipmentPage.tsx';
import FieldPage from "./pages/FieldPage.tsx";
import VehiclePage from "./pages/VehiclePage.tsx";
import StaffPage from "./pages/StaffPage.tsx";
import MoniteringLogPage from "./pages/MoniteringLogPage.tsx";
    import {RootLayout} from "./componet/RootLayout.tsx";
    import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";


const App: React.FC = () => {
    const routes = createBrowserRouter([
        {
            path: '',
            element: (
                <div className="app-layout">
                    <div className="content">
                        <RootLayout />
                    </div>
                </div>
            ),
            children: [
                { path:"/dashboard", element: <Dashboard />},
                { path:"/equipment", element: <EquipmentPage />},
                { path:"/crop", element:<CropPage />} ,
                { path:"/field", element:<FieldPage />},
                {path:"/vehicle" ,element:<VehiclePage />},
                {path :"/staff" ,element:<StaffPage />} ,
                {path:"/log", element:<MoniteringLogPage />}
            ],
        },
    ]);
    return (
        <Provider store={store}>
           <RouterProvider router={routes}/>
        </Provider>
    );
};

export default App;
