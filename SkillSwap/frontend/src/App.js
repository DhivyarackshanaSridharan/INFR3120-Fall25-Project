import React from 'react';
import './styles/SkillSwap.css';
import SessionForm from './components/SessionForm';
import SessionTable from './components/SessionTable';
import logo from './assets/logo.png';   // import logo from src/assets
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';   // new navbar
import Login from './pages/Login';          // new login page
import Register from './pages/Register';    // new register page
import ForgotPassword from './pages/ForgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResetPassword from './components/ResetPassword';

function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const onLogin = (u) => setUser(u);
  const onLogout = () => setUser(null);

  return (
    <div className="container">
      {/* Navigation bar */}
      <NavBar user={user} onLogout={onLogout} />

      {/* Logo, title, and sign-in */}
      <div className="header">
  <div className="header-left">
    <img src={logo} alt="SkillSwap Logo" className="logo" />
    <div className="title-block">
      <h1 className="title">SkillSwap</h1>
      <p className="tagline">Peer-to-peer micro-tutoring for students</p>
    </div>
  </div>
  <button
    className="signin-btn"
    onClick={() => (window.location.hash = '#/login')}
  >
    Sign in
  </button>
</div>


      {/* Router content */}
      {route.startsWith('#/login') ? (
        <Login onLogin={onLogin} />
      ) : route.startsWith('#/register') ? (
        <Register />
      ) : route.startsWith('#/forgot-password') ? (
        <ForgotPassword />
         ) : route.startsWith('#/reset-password') ? (   // ResetPassword condition
        <ResetPassword />
      ) : (
        <>
          <div className="content-card">
            <h2 className="text-center mb-3">Create a skill session</h2>
            <SessionForm />
          </div>

          <div className="content-card">
            <h2 className="text-center mb-3">Active skill sessions</h2>
            <SessionTable />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
