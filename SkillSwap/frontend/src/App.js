import React from 'react';
import './styles/SkillSwap.css';
import SessionForm from './components/SessionForm';
import SessionTable from './components/SessionTable';
import logo from './assets/logo.png';   // import logo from src/assets

function App() {
  return (
    <div className="container">
      {/* Logo, title, and sign-in */}
      <div className="header">
        <img src={logo} alt="SkillSwap Logo" className="logo" />   {/* use imported logo */}
        <div>
          <h1 className="title">SkillSwap</h1>
          <p className="tagline">Peer-to-peer micro-tutoring for students</p>
        </div>
        <button className="signin-btn" onClick={() => window.location.href = '/login'}>Sign in</button>
      </div>

      {/* Form section */}
      <div className="section">
        <h2>Create a skill session</h2>
        <SessionForm />
      </div>

      {/* Table section */}
      <div className="section">
        <h2>Active skill sessions</h2>
        <SessionTable />
      </div>
    </div>
  );
}

export default App;
