import React, { useState } from 'react';
import { Mail, Phone, User, Calendar, Clock, MessageSquare, Send } from 'lucide-react';
import FormField from './FormField';
import Button from '../common/Button';
import { ConsultationFormData } from './types';
import { createMailtoLink } from './EmailTemplate';

export default function ConsultationForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    purpose: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      window.location.href = createMailtoLink(formData);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof ConsultationFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-theme-navy/50 p-8 rounded-lg border border-blue-900/20">
      <h3 className="text-2xl font-bold text-theme-text mb-6">Schedule a Consultation</h3>
      
      <div className="space-y-4">
        <FormField
          label="Full Name"
          value={formData.name}
          onChange={handleChange('name')}
          icon={<User className="w-5 h-5 mr-2 text-blue-400" />}
        />

        <FormField
          label="Email"
          value={formData.email}
          onChange={handleChange('email')}
          icon={<Mail className="w-5 h-5 mr-2 text-blue-400" />}
        />

        <FormField
          label="Phone"
          value={formData.phone}
          onChange={handleChange('phone')}
          icon={<Phone className="w-5 h-5 mr-2 text-blue-400" />}
        />

        <FormField
          label="Preferred Date"
          value={formData.date}
          onChange={handleChange('date')}
          icon={<Calendar className="w-5 h-5 mr-2 text-blue-400" />}
        />

        <FormField
          label="Preferred Time"
          value={formData.time}
          onChange={handleChange('time')}
          icon={<Clock className="w-5 h-5 mr-2 text-blue-400" />}
        />

        <div>
          <label className="flex items-center text-theme-text mb-2">
            <MessageSquare className="w-5 h-5 mr-2 text-blue-400" />
            Consultation Purpose
          </label>
          <textarea
            value={formData.purpose}
            onChange={(e) => handleChange('purpose')(e.target.value)}
            className="w-full p-3 bg-theme-blue/10 border border-blue-900/20 rounded-md text-theme-text"
            rows={4}
            required
          />
        </div>

        <Button
          type="submit"
          fullWidth
          size="lg"
          loading={loading}
          icon={<Send className="w-4 h-4" />}
        >
          Schedule Consultation
        </Button>
      </div>
    </form>
  );
}