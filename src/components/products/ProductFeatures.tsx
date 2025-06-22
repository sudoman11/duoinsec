import React from 'react';
import { Shield, Users, Clock, Cloud } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: '24/7 Protection',
    description: 'Round-the-clock security monitoring and threat detection'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Team Support',
    description: 'Dedicated security experts and technical support'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Real-time Updates',
    description: 'Instant security patches and vulnerability fixes'
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Cloud Integration',
    description: 'Seamless integration with major cloud providers'
  }
];

export default function ProductFeatures() {
  return (
    <section className="py-20 bg-theme-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-theme-text mb-4">
            Product Features
          </h2>
          <p className="text-theme-text-secondary max-w-2xl mx-auto">
            Comprehensive security features designed for modern enterprises
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={`feature-${index}`}
              className="bg-theme-blue/20 p-6 rounded-lg border border-blue-900/20"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-theme-text mb-2">
                {feature.title}
              </h3>
              <p className="text-theme-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}