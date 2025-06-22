import React from 'react';
import TeamMember from './TeamMember';
import Stats from './Stats';
import { teamMembers } from '../../data/team';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're a team of industry experts dedicated to transforming businesses through education,
            innovation, and strategic guidance.
          </p>
        </div>

        <Stats />

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}