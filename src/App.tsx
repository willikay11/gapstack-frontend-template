import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';
import AppRouter from './router';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <PersistGate persistor={persistor}>
                    <AppRouter />
                </PersistGate>
            </Router>
        </Provider>
    );
}

export default App;
