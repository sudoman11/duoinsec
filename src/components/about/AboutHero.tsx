import React from 'react';
import { Shield, Users, Globe } from 'lucide-react';

export default function AboutHero() {
  return (
    <div className="relative bg-theme-dark py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-theme-text mb-6">
            About Duoinsec Groups
          </h1>
          <p className="text-xl text-theme-text-secondary max-w-3xl mx-auto">
            Founded by visionary students in Namakkal, Tamil Nadu, we're committed to 
            revolutionizing cybersecurity education and delivering innovative IT solutions 
            that safeguard digital ecosystems globally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-theme-blue/20 p-6 rounded-lg border border-blue-900/20">
            <Shield className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-theme-text mb-2">
              Our Mission
            </h3>
            <p className="text-theme-text-secondary">
              To empower organizations with cutting-edge cybersecurity solutions and 
              education that creates a safer digital future.
            </p>
          </div>
          
          <div className="bg-theme-blue/20 p-6 rounded-lg border border-blue-900/20">
            <Users className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-theme-text mb-2">
              Our Team
            </h3>
            <p className="text-theme-text-secondary">
              A diverse group of passionate experts dedicated to innovation and 
              excellence in cybersecurity.
            </p>
          </div>
          
          <div className="bg-theme-blue/20 p-6 rounded-lg border border-blue-900/20">
            <Globe className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-theme-text mb-2">
              Our Impact
            </h3>
            <p className="text-theme-text-secondary">
              Transforming businesses across the globe through education, innovation, 
              and strategic guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}