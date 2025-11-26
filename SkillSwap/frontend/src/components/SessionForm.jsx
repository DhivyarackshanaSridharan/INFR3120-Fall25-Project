import React, { useState } from 'react';

export default function SessionForm() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    duration: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const API_URL = `${process.env.REACT_APP_API_URL.replace(/\/$/, '')}/sessions`;
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          // ✅ ADDED: send JWT token to backend
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          title: form.title.trim(),
          description: form.description.trim(),
          // convert datetime-local to ISO string for backend safety
          date: new Date(form.date).toISOString(),
          duration: Number(form.duration),
        }),
      });

      const contentType = res.headers.get('content-type') || '';
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Request failed: ${res.status} — ${text}`);
      }

      if (contentType.includes('application/json')) {
        const data = await res.json();
        console.log('Success:', data);
      } else {
        const text = await res.text();
        throw new Error(`Unexpected content-type: ${contentType} — ${text}`);
      }

      setStatus('Created ✔');
      setForm({ title: '', description: '', date: '', duration: '' });

      // Refresh table after new session
      window.dispatchEvent(new Event('session-created'));
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Skill Title
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Date & Time
        <input
          type="datetime-local"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Duration (mins)
        <input
          name="duration"
          type="number"
          value={form.duration}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Description
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit Session</button>
      <p
        style={{
          marginTop: '8px',
          color: status.startsWith('Error') ? 'red' : '#0097A7',
        }}
      >
        {status}
      </p>
    </form>
  );
}
