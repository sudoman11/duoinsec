import { ConsultationFormData } from './types';

export function generateEmailContent(data: ConsultationFormData): string {
  return `
New Consultation Request

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Date: ${data.date}
Time: ${data.time}
Purpose: ${data.purpose}
  `.trim();
}

export function createMailtoLink(data: ConsultationFormData): string {
  const subject = 'New Consultation Request';
  const body = generateEmailContent(data);
  return `mailto:info@duoinsecgroups.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}