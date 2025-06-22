import { Shield, Server, Users, Lock, Cloud, Brain, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    icon: <Shield className="h-12 w-12" />,
    title: 'Enterprise Security',
    description: 'Comprehensive security solutions with advanced threat detection',
    link: '/solutions/enterprise'
  },
  {
    icon: <Server className="h-12 w-12" />,
    title: 'Cloud Infrastructure',
    description: 'Secure cloud solutions with seamless integration capabilities',
    link: '/solutions/cloud'
  },
  {
    icon: <Brain className="h-12 w-12" />,
    title: 'AI Security',
    description: 'AI-powered security analysis and threat prevention',
    link: '/solutions/ai'
  },
  {
    icon: <Lock className="h-12 w-12" />,
    title: 'Data Protection',
    description: 'Advanced encryption and data security protocols',
    link: '/solutions/data'
  },
  {
    icon: <Code className="h-12 w-12" />,
    title: 'Secure Development',
    description: 'Security-first development practices and tools',
    link: '/solutions/development'
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: 'Security Training',
    description: 'Comprehensive security awareness programs',
    link: '/solutions/training'
  }
];

export default function SolutionsExplore() {
  return (
    <section className="py-20 bg-theme-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-theme-text mb-6">
            Explore Our Solutions
          </h2>
          <p className="text-xl text-theme-text-secondary max-w-3xl mx-auto">
            Discover our comprehensive range of security solutions designed to protect 
            your business in an evolving digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Link 
              key={index}
              to={solution.link}
              className="group"
            >
              <div className="bg-theme-blue/20 p-8 rounded-lg border border-blue-900/20 hover:bg-theme-blue/30 transition duration-300 h-full">
                <div className="text-blue-400 mb-6 transform group-hover:scale-110 transition-transform">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold text-theme-text mb-4">
                  {solution.title}
                </h3>
                <p className="text-theme-text-secondary">
                  {solution.description}
                </p>
        
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/Contact"
            className="inline-flex items-center bg-theme-light text-white px-8 py-4 rounded-md hover:bg-blue-700 transition"
          >
            Schedule a Consultation
            <Cloud className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}