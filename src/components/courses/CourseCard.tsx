import { useState } from 'react';
import { Course } from '../../types/courses';
import EnrollmentModal from '../enrollment/EnrollmentModal';

export default function CourseCard({ course }: { course: Course }) {
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
              {course.level}
            </span>
          </div>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <div className="space-y-2 mb-4">
            <div className="text-sm text-gray-600">Duration: {course.duration}</div>
            <div className="flex flex-wrap gap-2">
              {course.topics.slice(0, 3).map((topic, index) => (
                <span key={index} className="px-2 py-1 bg-gray-800 text-white  rounded-full hover:bg-blue-300 transition text-xs">
                  {topic}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-2xl font-bold text-blue-600">${course.price}</span>
            <button 
              onClick={() => setShowEnrollModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Enroll Now
              
            </button>
          </div>
        </div>
      </div>

      <EnrollmentModal
        isOpen={showEnrollModal}
        onClose={() => setShowEnrollModal(false)}
        courseId={course.id}
        courseName={course.title}
      />
    </>
  );
}