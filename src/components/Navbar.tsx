import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './common/Button';
import Logo from './common/Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-theme-dark/90 backdrop-blur-md border-b border-blue-900/20 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-theme-text-secondary hover:text-blue-400 transition">
              Education
            </Link>
            <Link to="/products" className="text-theme-text-secondary hover:text-blue-400 transition">
              Products
            </Link>
            <Link to="/Events" className="text-theme-text-secondary hover:text-blue-400 transition">
              Events
            </Link>
            <Link to="/founders" className="text-theme-text-secondary hover:text-blue-400 transition">
              Founders
            </Link>
            <Link to="/about" className="text-theme-text-secondary hover:text-blue-400 transition">
              About
            </Link>
            <Link to="/Contact">
              <Button variant="outline" size="sm">
                Contact Us
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            icon={isMenuOpen ? <X /> : <Menu />}
          />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/founders" 
                className="text-theme-text-secondary hover:text-blue-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Founders
              </Link>
              <Link 
                to="/courses" 
                className="text-theme-text-secondary hover:text-blue-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </Link>
              <Link 
                to="/products" 
                className="text-theme-text-secondary hover:text-blue-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/Events" 
                className="text-theme-text-secondary hover:text-blue-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                to="/about" 
                className="text-theme-text-secondary hover:text-blue-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
              to="/Contact"
              className="text-theme-text-secondary hover:text-blue-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="outline" size="sm" fullWidth>
                Contact Us
              </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
