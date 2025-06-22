import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-theme-navy">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-theme-text mb-4">About Duoinsec</h2>
          <p className="text-theme-text-secondary max-w-3xl mx-auto">
            Founded by visionary college students in Namakkal, Tamil Nadu, Duoinsec is committed to 
            revolutionizing cybersecurity education and delivering innovative IT solutions that safeguard 
            digital ecosystems globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-theme-blue/30 p-8 rounded-lg border border-blue-900/20">
            <h3 className="text-2xl font-bold mb-4 text-theme-text">Our Vision</h3>
            <p className="text-theme-text-secondary">
              To revolutionize cybersecurity education and deliver innovative IT solutions that 
              safeguard digital ecosystems globally while empowering the next generation of tech leaders.
            </p>
          </div>
          <div className="bg-theme-blue/30 p-8 rounded-lg border border-blue-900/20">
            <h3 className="text-2xl font-bold mb-4 text-theme-text">Why Choose Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-theme-text-secondary">
                <Award className="h-5 w-5 text-blue-400" />
                <span>Award-winning founders and professionals</span>
              </li>
              <li className="flex items-center space-x-3 text-theme-text-secondary">
                <Target className="h-5 w-5 text-blue-400" />
                <span>Focus on practical, hands-on learning</span>
              </li>
              <li className="flex items-center space-x-3 text-theme-text-secondary">
                <Shield className="h-5 w-5 text-blue-400" />
                <span>Industry-relevant curriculum</span>
              </li>
              <li className="flex items-center space-x-3 text-theme-text-secondary">
                <Users className="h-5 w-5 text-blue-400" />
                <span>Supportive learning community</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-theme-blue/20 p-6 rounded-lg border border-blue-900/20 hover:bg-theme-blue/30 transition">
            <Shield className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-theme-text">Cybersecurity Focus</h3>
            <p className="text-theme-text-secondary">
              Comprehensive training in ethical hacking, penetration testing, and security best practices.
            </p>
          </div>
          <div className="bg-theme-blue/20 p-6 rounded-lg border border-blue-900/20 hover:bg-theme-blue/30 transition">
            <Target className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-theme-text">Practical Learning</h3>
            <p className="text-theme-text-secondary">
              Hands-on experience with real-world projects and industry-standard tools.
            </p>
          </div>
          <div className="bg-theme-blue/20 p-6 rounded-lg border border-blue-900/20 hover:bg-theme-blue/30 transition">
            <Award className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-theme-text">Certification</h3>
            <p className="text-theme-text-secondary">
              Industry-recognized certifications and comprehensive course completion certificates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}