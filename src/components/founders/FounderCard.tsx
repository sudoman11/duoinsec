// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ArrowRight, Linkedin, Github } from 'lucide-react';
import { type Founder } from '../../types/founder';

export default function FounderCard({ founder }: { founder: Founder }) {
  return (
    <div className="bg-theme-blue/20 rounded-lg border border-blue-900/20 overflow-hidden">
      <div className="aspect-w-10 aspect-h-9">
        <img 
          src={founder.image} 
          alt={founder.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-theme-text">{founder.name}</h3>
            <p className="text-blue-400">{founder.role}</p>
          </div>
          <div className="flex space-x-3">
            {founder.socialLinks.map((link, index) => {
              const Icon = link.platform === 'linkedin' ? Linkedin : Github;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-text-secondary hover:text-blue-400 transition"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
        
        <p className="text-theme-text-secondary mb-4">{founder.bio}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-theme-text mb-2">Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {founder.expertise.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-900/20 text-blue-400 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}