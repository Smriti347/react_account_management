import React from 'react';

const Login = () => {
    return (
        <div className="container" style={{ backgroundColor: 'lavender', padding: '2rem', borderRadius: '8px' }}>
            <h2>Login</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
