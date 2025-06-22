import { ArrowRight, Shield, Brain, Code } from 'lucide-react';

export default function Hero() {
  return (
    <div 
      className="relative bg-gradient-to-r from-blue-900 to-indigo-900 h-screen"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-6">Securing the Digital Future</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Duoinsec - A student-led startup from Namakkal, Tamil Nadu, dedicated to revolutionizing cybersecurity education
            and delivering innovative IT solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-400" />
              <span>Cybersecurity Expertise</span>
            </div>
            <div className="flex items-center space-x-3">
              <Brain className="h-8 w-8 text-blue-400" />
              <span>AI Innovation</span>
            </div>
            <div className="flex items-center space-x-3">
              <Code className="h-8 w-8 text-blue-400" />
              <span>Practical Training</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold flex items-center hover:bg-blue-700 transition">
              Explore Courses <ArrowRight className="ml-2" />
            </a>
            <a href="#contact" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-900 transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}