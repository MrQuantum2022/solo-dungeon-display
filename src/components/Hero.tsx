
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !imageRef.current || !textRef.current) return;

      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      // Parallax effect for image
      imageRef.current.style.transform = `translateX(${x * -20}px) translateY(${y * -20}px)`;

      // Subtle text movement
      textRef.current.style.transform = `translateX(${x * 10}px) translateY(${y * 10}px)`;
    };

    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPos = window.scrollY;
      const opacity = Math.max(1 - scrollPos / 700, 0);
      const scale = Math.max(1 - scrollPos / 2000, 0.8);
      
      if (imageRef.current) {
        imageRef.current.style.opacity = opacity.toString();
        imageRef.current.style.transform = `scale(${scale}) translateY(${scrollPos * 0.1}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,174,219,0.15)_0,rgba(12,20,36,0)_70%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dungeon-darker to-transparent"></div>
        <div className="animated-bg"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-dungeon-blue-glow/5 blur-3xl animate-glow-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center">
        {/* Hero Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-dungeon-blue-glow/20 blur-3xl filter animate-glow-pulse"></div>
            <img
              ref={imageRef}
              src="/lovable-uploads/88d8b7d4-2c72-48c0-bbe1-f59e3bd6ce8f.png"
              alt="Statue of God Cosplay"
              className="relative z-10 w-full max-w-md animate-float"
              style={{ filter: 'drop-shadow(0 0 15px rgba(30, 174, 219, 0.5))' }}
            />
            
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dungeon-blue-glow/30 rounded-full animate-rotate-slow"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-dungeon-blue-glow/20 rounded-full animate-rotate-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-dungeon-blue-glow/10 rounded-full animate-rotate-slow" style={{ animationDuration: '30s' }}></div>
            
            {/* Glowing dots */}
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className={cn(
                  "absolute w-2 h-2 rounded-full bg-dungeon-blue-glow animate-glow-pulse",
                  i % 2 === 0 ? "animate-glow-pulse" : "animate-glow-pulse-slow"
                )}
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Text */}
        <div ref={textRef} className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
            <h4 className="text-sm uppercase tracking-wider text-dungeon-blue-glow font-semibold mb-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Solo Leveling Inspired
            </h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight glow-text animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Become the <span className="text-gradient">Statue of God</span>
            </h1>
            <p className="text-gray-400 text-lg animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Transform into the imposing Architect of the System with our premium cosplay designs. Capture the essence of Solo Leveling's most enigmatic entity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <a href="#gallery" className="glow-button text-dungeon-blue-glow hover:text-white">
                View Gallery
              </a>
              <a href="#contact" className="border border-dungeon-blue-glow/30 bg-transparent hover:bg-dungeon-blue-glow/10 text-white rounded-md px-6 py-3 text-sm font-medium transition-all duration-300">
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-dungeon-blue-glow/50 flex justify-center">
          <div className="w-1 h-2 bg-dungeon-blue-glow rounded-full mt-2 animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
