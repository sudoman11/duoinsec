import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type TeamMemberProps } from '../../types/about';

export default function TeamMember({ image, name, role, description, id }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-blue-600 mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={`/team/${id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}