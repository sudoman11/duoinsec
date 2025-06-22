import { Shield, Server, Users, Cpu } from 'lucide-react';

const solutions = [
  {
    icon: <Shield className="h-8 w-8 text-blue-400" />,
    title: 'Enterprise Security',
    description: 'Comprehensive security solutions for businesses of all sizes.'
  },
  {
    icon: <Server className="h-8 w-8 text-blue-400" />,
    title: 'IT Infrastructure',
    description: 'Modern infrastructure setup and management services.'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-400" />,
    title: 'Professional Training',
    description: 'Industry-focused training programs and certifications.'
  },
  {
    icon: <Cpu className="h-8 w-8 text-blue-400" />,
    title: 'IoT Solutions',
    description: 'Custom IoT development and security implementations.'
  }
];

export default function Solutions() {
  return (
    <section className="py-20 bg-theme-navy">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-theme-text mb-4">Our Solutions</h2>
          <p className="text-theme-text-secondary max-w-2xl mx-auto">
            Comprehensive technology solutions tailored for modern businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-theme-blue p-6 rounded-lg shadow-xl hover:shadow-2xl transition border border-blue-900/20">
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-theme-text">{solution.title}</h3>
              <p className="text-theme-text-secondary">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}