import React from 'react';
import { type BlogPost } from '../../../types/about';

export default function BlogPosts({ blogs }: { blogs: BlogPost[] }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Blog Posts</h3>
      <div className="space-y-4">
        {blogs.map((post, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-blue-600">{post.title}</h4>
            <p className="text-sm text-gray-600 mt-1">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-700 mt-2">{post.summary}</p>
            <a 
              href={post.link}
              className="text-sm text-blue-600 hover:underline mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Post →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}