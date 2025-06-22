import React from 'react';
import { type Publication } from '../../../types/about';

export default function Publications({ publications }: { publications: Publication[] }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Research Publications</h3>
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-blue-600">{pub.title}</h4>
            <p className="text-sm text-gray-600 mt-1">
              {pub.journal} • {pub.year}
            </p>
            <a 
              href={pub.link}
              className="text-sm text-blue-600 hover:underline mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Paper →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}