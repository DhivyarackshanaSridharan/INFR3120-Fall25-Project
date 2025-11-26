import { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('token', data.token);
      onLogin?.({ name: data.name, email: data.email });
      alert('Logged in successfully');
      window.location.hash = '#/'; // go back home
    } else {
      alert(data.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 360, margin: '24px auto' }}>
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
        style={{ display:'block', width:'100%', margin:'8px 0', padding:'8px' }}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        required
        style={{ display:'block', width:'100%', margin:'8px 0', padding:'8px' }}
      />
      <button type="submit">Login</button>

      {/* Forgot Password link */}
      <p style={{ marginTop: '12px' }}>
        <a href="#/forgot-password">Forgot Password?</a>
      </p>
    </form>
  );
}
