import React from 'react';
import { Users, Award, Globe } from 'lucide-react';

const stats = [
  { icon: <Users className="h-8 w-8" />, value: '500+', label: 'Enterprise Clients' },
  { icon: <Award className="h-8 w-8" />, value: '1000+', label: 'Certified Professionals' },
  { icon: <Globe className="h-8 w-8" />, value: '20+', label: 'Global Partners' },
];

export default function Stats() {
  return (
    <div className="bg-theme-dark py-16 border-y border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-theme-text bg-theme-blue/20 p-8 rounded-lg">
              <div className="text-blue-400">{stat.icon}</div>
              <span className="text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                {stat.value}
              </span>
              <span className="text-lg mt-1 text-theme-text-secondary">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}