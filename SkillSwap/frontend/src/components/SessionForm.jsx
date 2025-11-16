import React, { useState } from 'react';

export default function SessionForm() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    duration: '',
    offeredBy: '',
    availability: '',
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
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
  });


      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus('Created ✔');
      setForm({ title: '', description: '', duration: '', offeredBy: '', availability: '' });

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
        <input name="title" value={form.title} onChange={handleChange} required />
      </label>

      <label>
        Description
        <textarea name="description" value={form.description} onChange={handleChange} required />
      </label>

      <label>
        Duration (mins)
        <input name="duration" type="number" value={form.duration} onChange={handleChange} />
      </label>

      <label>
        Offered By
        <input name="offeredBy" value={form.offeredBy} onChange={handleChange} />
      </label>

      <label>
        Availability
        <input name="availability" value={form.availability} onChange={handleChange} />
      </label>

      <button type="submit">Submit Session</button>
      <p style={{ marginTop: '8px', color: status.startsWith('Error') ? 'red' : '#0097A7' }}>
        {status}
      </p>
    </form>
  );
}
