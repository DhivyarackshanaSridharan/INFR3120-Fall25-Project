import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    alert(data.message || 'If this email exists, a reset link has been sent.');
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 360, margin: '24px auto' }}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        style={{ display:'block', width:'100%', margin:'8px 0', padding:'8px' }}
      />
      <button type="submit">Send Reset Link</button>
    </form>
  );
}
