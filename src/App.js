import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';

const App = () => {
    return (
        <Router>
            <div className="container" style={{ marginTop: '2rem' }}>
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/account" className="nav-link">Account</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
