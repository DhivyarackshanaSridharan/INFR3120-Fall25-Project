import React, { useEffect, useState } from 'react';

export default function SessionTable() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchSessions = async () => {
    try {
      setLoading(true);
      const API_URL = `${process.env.REACT_APP_API_URL.replace(/\/$/, '')}/sessions`;
      const res = await fetch(API_URL);
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

  useEffect(() => {
    fetchSessions();
    const handler = () => fetchSessions();
    window.addEventListener('session-created', handler);
    return () => window.removeEventListener('session-created', handler);
  }, []);

  // ✅ NEW: Delete handler with JWT token
  const handleDelete = async (id) => {
    try {
      const API_URL = `${process.env.REACT_APP_API_URL.replace(/\/$/, '')}/sessions/${id}`;
      const res = await fetch(API_URL, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Delete failed: ${res.status} — ${text}`);
      }

      // Remove deleted session from UI
      setSessions((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      alert('You must be logged in to delete a session.');
      console.error(err);
    }
  };

  if (loading) return <p>Loading sessions…</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!sessions.length) return <p>No active skill sessions yet.</p>;

  return (
    <>
      {/*Responsive wrapper */}
      <div className="table-responsive">

        <table className="session-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Description</th>
              <th>Actions</th> 
            </tr>
          </thead>

          <tbody>
            {sessions.map((s) => (
              <tr key={s._id}>
                <td>{s.title || 'Untitled'}</td>
                <td>{s.date ? new Date(s.date).toLocaleString() : '—'}</td>
                <td>{s.duration ? `${s.duration} mins` : '—'}</td>
                <td>{s.description || 'No description provided'}</td>

                {/* Delete button */}
                <td>
                  <button
                    onClick={() => handleDelete(s._id)}
                    style={{ background: 'red', color: 'white', padding: '4px 8px' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  );
}
