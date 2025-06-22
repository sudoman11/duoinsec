import React from 'react';
import { useParams } from 'react-router-dom';
import { teamMembers } from '../../../data/team';
import Publications from './Publications';
import BlogPosts from './BlogPosts';

export default function TeamMemberProfile() {
  const { id } = useParams<{ id: string }>();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8 flex items-center">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-32 h-32 rounded-full object-cover mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{member.name}</h1>
            <p className="text-xl text-blue-600">{member.role}</p>
          </div>
        </div>

        <div className="prose max-w-none mb-12">
          <p className="text-gray-600 text-lg">{member.description}</p>
        </div>

        <Publications publications={member.publications} />
        <BlogPosts blogs={member.blogs} />
      </div>
    </div>
  );
}