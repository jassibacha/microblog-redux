import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import AppRouter from './routes/AppRouter';

function App() {
    return (
        <Router>
            <Header />
            <div className="container mt-5">
                <AppRouter />
            </div>
        </Router>
    );
}

export default App;
