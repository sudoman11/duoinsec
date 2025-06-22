interface FormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export const validateForm = (data: FormData): string | null => {
  if (!data.name.trim()) {
    return 'Name is required';
  }

  if (!data.email.trim()) {
    return 'Email is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return 'Please enter a valid email address';
  }

  if (!data.phone.trim()) {
    return 'Phone number is required';
  }

  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  if (!phoneRegex.test(data.phone)) {
    return 'Please enter a valid phone number';
  }

  return null;
};