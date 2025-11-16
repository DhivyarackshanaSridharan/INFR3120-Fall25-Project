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
    const API_URL = `${process.env.REACT_APP_API_URL}/sessions`;
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: form.title.trim(),
        tutorName: form.tutorName.trim(),
        skill: form.skill.trim(),
        date: form.date, // from datetime-local input
        duration: Number(form.duration),
        description: form.description.trim(),
      }),
    });

    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    setStatus('Created ✔');
    setForm({ title: '', tutorName: '', skill: '', date: '', duration: '', description: '' });

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
        Tutor Name
        <input name="tutorName" value={form.tutorName} onChange={handleChange} required />
      </label>

      <label>
        Skill
        <input name="skill" value={form.skill} onChange={handleChange} required />
      </label>

      <label>
        Date & Time
        <input type="datetime-local" name="date" value={form.date} onChange={handleChange} required />
      </label>

      <label>
        Duration (mins)
        <input name="duration" type="number" value={form.duration} onChange={handleChange} required />
      </label>

      <label>
        Description
        <textarea name="description" value={form.description} onChange={handleChange} required />
      </label>

      <button type="submit">Submit Session</button>
      <p style={{ marginTop: '8px', color: status.startsWith('Error') ? 'red' : '#0097A7' }}>
        {status}
      </p>
    </form>

  );
}
