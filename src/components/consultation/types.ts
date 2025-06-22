export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  purpose: string;
}

export interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  icon: React.ReactNode;
}