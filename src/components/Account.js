import React, { useState } from 'react';

const Account = () => {
    const [email, setEmail] = useState('user@example.com');
    const [username, setUsername] = useState('defaultuser');
    const [phone, setPhone] = useState('123-456-7890');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();

        // Simple validation
        if (!email || !username || !phone) {
            setMessage('Please fill out all fields');
            return;
        }

        if (newPassword && newPassword.length < 6) {
            setMessage('New password should be at least 6 characters');
            return;
        }

        // Simulate an account update (e.g., call an API)
        setMessage('Account information updated successfully!');
        
        // Optionally reset password fields if the update was successful
        setPassword('');
        setNewPassword('');
    };

    return (
        <div className="container" style={{ backgroundColor: 'lavender', padding: '2rem', borderRadius: '8px' }}>
            <h2>Account Information</h2>
            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Current Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter current password to update"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Account</button>
            </form>
            {message && <p style={{ color: 'green', marginTop: '1rem' }}>{message}</p>}
        </div>
    );
};

export default Account;
