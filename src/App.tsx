import React from 'react';
import { Provider } from 'react-redux';
import store from './store/Store.ts';
import CropPage from './pages/CropPage.tsx';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <CropPage />
        </Provider>
    );
};

export default App;
