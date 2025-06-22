import React from 'react';
import { Award, Users, Globe } from 'lucide-react';

const stats = [
  { icon: <Users className="h-8 w-8" />, value: '10K+', label: 'Clients Served' },
  { icon: <Award className="h-8 w-8" />, value: '15+', label: 'Years Experience' },
  { icon: <Globe className="h-8 w-8" />, value: '30+', label: 'Countries' },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center p-6 bg-blue-600 rounded-lg text-white">
          {stat.icon}
          <span className="text-3xl font-bold mt-2">{stat.value}</span>
          <span className="text-sm mt-1">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}