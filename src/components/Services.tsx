import React from 'react';
import { BookOpen, TrendingUp, Users, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    title: 'Education Programs',
    description: 'Comprehensive training and development programs tailored to your industry needs.'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    title: 'Business Consulting',
    description: 'Strategic guidance and expert insights to drive your business forward.'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Leadership Development',
    description: 'Transform managers into inspiring leaders through our specialized programs.'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
    title: 'Innovation Workshop',
    description: 'Learn to foster creativity and implement innovative solutions in your organization.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our comprehensive suite of services can help your business reach new heights
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}