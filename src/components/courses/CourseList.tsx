import { useState } from 'react';
import { courses } from '../../data/courses';
import CourseCard from './CourseCard';
import { CourseCategory } from '../../types/courses';

export default function CourseList() {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'all'>('all');

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const categories: (CourseCategory | 'all')[] = [
    'all',
    'Cybersecurity',
    'Artificial Intelligence',
    'Programming',
    'Web Development',
    'PCB Design',
    'IoT'
  ];
  

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Courses</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive range of technical courses designed to help you master the latest technologies.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition`}
            >
              {category === 'all' ? 'All Courses' : category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}