import { X } from 'lucide-react';
import EnrollmentForm from './EnrollmentForm';

export default function EnrollmentModal({ 
  isOpen, 
  onClose, 
  courseId, 
  courseName 
}: {
  isOpen: boolean;
  onClose: () => void;
  courseId: string;
  courseName: string;
}) {
  if (!isOpen) return null;

  const handleSuccess = () => {
    alert('Enrollment submitted successfully! Check your email for confirmation.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-theme-navy rounded-lg w-full max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-theme-text-secondary hover:text-theme-text"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-theme-text mb-2">Enroll in Course</h2>
          <p className="text-theme-text-secondary mb-6">{courseName}</p>
          
          <EnrollmentForm 
            courseId={courseId}
            courseName={courseName}
            onSuccess={handleSuccess}
          />
        </div>
      </div>
    </div>
  );
}