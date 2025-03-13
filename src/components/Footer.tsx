
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dungeon-dark relative overflow-hidden border-t border-dungeon-blue-glow/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,174,219,0.03)_0,rgba(12,20,36,0)_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight mb-4">
              <span className="text-dungeon-blue-glow animate-glow-pulse">STATUE</span>
              <span className="text-white">COSPLAY</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Bringing the intimidating presence of Solo Leveling's Statue of God to life
              through premium cosplay designs, accessories, and community events.
            </p>
            <div className="flex gap-4">
              {['instagram', 'twitter', 'facebook', 'discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-dungeon-dark border border-dungeon-blue-glow/30 flex items-center justify-center transition-all duration-300 hover:bg-dungeon-blue-glow/20"
                >
                  <img 
                    src={`https://api.iconify.design/simple-icons:${social}.svg?color=%231EAEDB`} 
                    alt={social}
                    className="w-4 h-4"
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Gallery', 'Features', 'Events', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-dungeon-blue-glow transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Cosplay Guide', 'Materials', 'LED Setup', 'Size Chart', 'FAQs'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-dungeon-blue-glow transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-white font-medium mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive updates on new cosplay designs and upcoming events.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow bg-dungeon-darker border border-dungeon-blue-glow/20 rounded-l-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-dungeon-blue-glow/50 text-sm"
              />
              <button className="bg-dungeon-blue-glow/80 hover:bg-dungeon-blue-glow text-white font-medium py-2 px-4 rounded-r-md transition-colors duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dungeon-blue-glow/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Statue Cosplay. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-dungeon-blue-glow text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-dungeon-blue-glow text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-dungeon-blue-glow text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
