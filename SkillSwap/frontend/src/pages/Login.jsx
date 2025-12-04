import { useState } from 'react';
import LoginButtons from '../components/LoginButtons'; // import the OAuth buttons

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
  e.preventDefault();

  console.log('API URL:', process.env.REACT_APP_API_URL); 

  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include' 
    });

    let data;
    try {
      data = await res.json();
    } catch {
      data = { message: 'Server did not return JSON' };
    }

    console.log('Login response:', res.status, data); 

    if (res.ok) {
      localStorage.setItem('token', data.token);
      onLogin?.({ name: data.name, email: data.email });
      alert('Logged in successfully');
      window.location.hash = "#/profile"; // redirect to profile
    } else {
      alert(data.message || 'Login failed');
    }
  } catch (err) {
    console.error('Login error:', err);
    alert('Network error: ' + err.message);
  }
};


  return (
    <div style={{ maxWidth: 360, margin: '24px auto' }}>
      <h2>Login</h2>

      {/* Local login form */}
      <form onSubmit={submit}>
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
          <a href="#/reset-password">Forgot Password?</a>
        </p>
      </form>

      {/* Divider */}
      <hr style={{ margin: '20px 0' }} />

      {/* OAuth login buttons */}
      <LoginButtons />
    </div>
  );
}
