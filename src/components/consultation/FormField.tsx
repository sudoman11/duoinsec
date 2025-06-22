import { FormFieldProps } from './types';

export default function FormField({ 
  label, 
  value, 
  onChange, 
  required = true, 
  icon,
  type = "text"
}: FormFieldProps & { type?: string }) {
  return (
    <div>
      <label className="flex items-center text-theme-text mb-2">
        {icon}
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 bg-theme-blue/10 border border-blue-900/20 rounded-md text-theme-text focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}