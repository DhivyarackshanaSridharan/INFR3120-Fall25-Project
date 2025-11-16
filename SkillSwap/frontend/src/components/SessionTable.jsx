import React, { useEffect, useState } from 'react';

export default function SessionTable() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch mock data from placeholder API
  const fetchSessions = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');    // TODO: Replace mock API with real backend once teammate finishes POST/GET routes
      if (!res.ok) throw new Error(`GET /sessions failed: ${res.status}`);
      const data = await res.json();
      setSessions(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Re-fetch when a new session is created
  useEffect(() => {
    fetchSessions();
    const handler = () => fetchSessions();
    window.addEventListener('session-created', handler);
    return () => window.removeEventListener('session-created', handler);
  }, []);

  if (loading) return <p>Loading sessions…</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!sessions.length) return <p>No active skill sessions yet.</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Offered By</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody>
        {sessions.map((s) => (
          <tr key={s.id || `${s.title}-${Math.random()}`}>
            <td>{s.title || 'Untitled'}</td>
            <td>{s.body || 'No description provided'}</td>
            <td>{s.duration ? `${s.duration} mins` : '—'}</td>
            <td>{s.offeredBy || 'Mock User'}</td>
            <td>{s.availability || 'Anytime'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
