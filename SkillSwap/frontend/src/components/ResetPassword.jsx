import React, { useState } from 'react';
import axios from 'axios';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleReset = async () => {
    if (!email || !newPassword) {
      alert('Please enter both email and new password');
      return;
    }

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
      const res = await axios.post(`${API_URL}/api/auth/reset-password`, {
        email,
        newPassword,
      });
      alert(res.data.message);
    } catch (err) {
      alert('Error resetting password');
    }
  };

  return (
    <div className="reset-container">
      <h2>Reset Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default ResetPassword;
