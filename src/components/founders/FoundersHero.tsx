import { Users } from 'lucide-react';

export default function FoundersHero() {
  return (
    <div className="relative bg-theme-dark py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Users className="h-16 w-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-theme-text mb-6">
            Meet Our Founders
          </h1>
          <p className="text-xl text-theme-text-secondary max-w-3xl mx-auto">
            Visionary leaders from Duoinsec, dedicated to revolutionizing 
            Technical education and  innovation.
          </p>
        </div>
      </div>
    </div>
  );
}