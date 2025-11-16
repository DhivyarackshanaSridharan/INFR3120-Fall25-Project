import React from 'react';
import './styles/SkillSwap.css';   // use your custom CSS
import SessionForm from './components/SessionForm';
import SessionTable from './components/SessionTable';

function App() {
  return (
    <div className="container">
      <h1 className="title">SkillSwap</h1>
      <p className="tagline">Peer-to-peer micro-tutoring for students</p>

      <div className="section">
        <h2>Create a skill session</h2>
        <SessionForm />
      </div>

      <div className="section">
        <h2>Active skill sessions</h2>
        <SessionTable />
      </div>
    </div>
  );
}

export default App;
