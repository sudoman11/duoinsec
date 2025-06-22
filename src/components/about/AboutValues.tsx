import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

const values = [
  {
    icon: <Shield className="h-8 w-8 text-blue-400" />,
    title: 'Security First',
    description: 'We prioritize security in everything we do, ensuring the highest standards of protection.'
  },
  {
    icon: <Target className="h-8 w-8 text-blue-400" />,
    title: 'Innovation',
    description: 'Constantly pushing boundaries to develop cutting-edge solutions.'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-400" />,
    title: 'Community',
    description: 'Building a strong community of security-conscious professionals.'
  },
  {
    icon: <Award className="h-8 w-8 text-blue-400" />,
    title: 'Excellence',
    description: 'Committed to delivering excellence in every project and initiative.'
  }
];

export default function AboutValues() {
  return (
    <section className="py-20 bg-theme-navy">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-theme-text mb-4">Our Values</h2>
          <p className="text-theme-text-secondary max-w-2xl mx-auto">
            The principles that guide our mission and shape our approach to cybersecurity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-theme-blue/20 p-6 rounded-lg border border-blue-900/20">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-theme-text">{value.title}</h3>
              <p className="text-theme-text-secondary">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}