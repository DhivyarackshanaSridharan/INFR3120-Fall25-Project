import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert('Registration successful. Please login.');
      window.location.hash = '#/login';
    } else {
      alert(data.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 360, margin: '24px auto' }}>
      <h2>Register</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Full name"
        required
        style={{ display:'block', width:'100%', margin:'8px 0', padding:'8px' }}
      />
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
      <input
        type="password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        required
        style={{ display:'block', width:'100%', margin:'8px 0', padding:'8px' }}
      />
      <button type="submit">Register</button>
    </form>
  );
}
