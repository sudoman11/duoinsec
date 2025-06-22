import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-theme-dark overflow-hidden">
      {/* Dynamic background with corporate theme */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-theme-dark via-theme-navy to-theme-blue"
        style={{
          backgroundImage: `
            url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"),
            radial-gradient(circle at 20% 50%, rgba(17, 34, 64, 0.95) 0%, rgba(10, 25, 47, 0.95) 100%)
          `,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Corporate pattern overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(30, 58, 138, 0.05) 25%, transparent 25%),
              linear-gradient(135deg, rgba(30, 58, 138, 0.05) 25%, transparent 25%)
            `,
            backgroundSize: '50px 50px',
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 min-h-screen flex items-center">
        <div className="text-theme-text max-w-3xl">
          <div className="mb-8">
            <div className="w-16 h-2 bg-blue-500 mb-8"></div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Learn Create
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
                Innovate
              </span>
            </h1>
          </div>
          <p className="text-xl mb-12 text-theme-text-secondary leading-relaxed">
            Empowering enterprises through cutting-edge Technical solutions, 
            professional training, and innovative IT services.
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <Link 
              to="/ExploreSolutions" 
              className="bg-theme-light text-white px-8 py-4 rounded-md font-semibold flex items-center justify-center hover:bg-blue-700 transition backdrop-blur-sm group"
            >
              Explore Solutions 
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-theme-light text-white px-8 py-4 rounded-md font-semibold hover:bg-theme-light transition backdrop-blur-sm text-center"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}