
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6',
        isScrolled
          ? 'bg-dungeon-darker/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold tracking-tight glow-text"
          >
            <span className="text-dungeon-blue-glow animate-glow-pulse">STATUE</span>
            <span className="text-white">COSPLAY</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {['Home', 'Gallery', 'Features', 'Events', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-dungeon-blue-glow transition-colors duration-300 text-sm uppercase tracking-wider font-medium hero-glow px-1 py-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="glow-button text-dungeon-blue-glow hover:text-white"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-dungeon-blue-glow" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-dungeon-darker/95 backdrop-blur-lg z-40 transition-transform duration-300 pt-20',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container mx-auto px-6">
          <ul className="flex flex-col items-center gap-6">
            {['Home', 'Gallery', 'Features', 'Events', 'Contact'].map((item) => (
              <li key={item} className="w-full">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-center text-xl text-gray-300 hover:text-dungeon-blue-glow transition-colors duration-300 py-3 border-b border-dungeon-blue-glow/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="mt-4 w-full">
              <a
                href="#contact"
                className="block text-center glow-button w-full text-dungeon-blue-glow hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
