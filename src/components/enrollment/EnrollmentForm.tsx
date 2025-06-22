import React, { useState } from 'react';
import { sendEnrollmentEmail } from '../../utils/email';
import { validateForm } from '../../utils/validation';

export default function EnrollmentForm({ courseId, courseName, onSuccess }: {
  courseId: string;
  courseName: string;
  onSuccess: () => void;
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const validationError = validateForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      await sendEnrollmentEmail({
        ...formData,
        courseId,
        courseName
      });
      onSuccess();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Failed to submit enrollment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-theme-text mb-2">Full Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-4 py-2 bg-theme-blue/20 border border-blue-900/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-theme-text"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-theme-text mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-4 py-2 bg-theme-blue/20 border border-blue-900/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-theme-text"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-theme-text mb-2">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full px-4 py-2 bg-theme-blue/20 border border-blue-900/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-theme-text"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-theme-text mb-2">Message (Optional)</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className="w-full px-4 py-2 bg-theme-blue/20 border border-blue-900/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-theme-text"
          rows={4}
        />
      </div>

      {error && (
        <div className="text-red-400 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-theme-light text-white py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Enroll Now'}
      </button>
    </form>
  );
}