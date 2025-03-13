
import React, { useEffect, useRef } from 'react';
import { Ghost, Flame, Crown, Mask, Eye, Key } from 'lucide-react';

const featureItems = [
  {
    icon: <Eye className="w-10 h-10 text-dungeon-blue-glow" />,
    title: 'Glowing Eyes',
    description: 'LED technology for authentic glowing red eyes that pierce through darkness.',
  },
  {
    icon: <Crown className="w-10 h-10 text-dungeon-blue-glow" />,
    title: 'Crown Design',
    description: 'Precision-crafted crown spikes with durable and lightweight materials.',
  },
  {
    icon: <Mask className="w-10 h-10 text-dungeon-blue-glow" />,
    title: 'Perfect Smile',
    description: 'Terrifying grin with detailed teeth molding for screen-accurate appearance.',
  },
  {
    icon: <Flame className="w-10 h-10 text-dungeon-blue-glow" />,
    title: 'Ethereal Glow',
    description: 'Special fabric treatment for that signature blue luminous effect.',
  },
  {
    icon: <Key className="w-10 h-10 text-dungeon-blue-glow" />,
    title: 'Robe Patterns',
    description: 'Authentic pattern details with weathered effect and magical runes.',
  },
  {
    icon: <Ghost className="w-10 h-10 text-dungeon-blue-glow" />,
    title: 'Imposing Presence',
    description: 'Full-height design with proper proportions for maximum impact.',
  },
];

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,174,219,0.05)_0,rgba(12,20,36,0)_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
            Premium <span className="text-gradient">Cosplay Features</span>
          </h2>
          <p className="text-gray-400">
            Our Statue of God cosplay designs incorporate meticulous attention to detail
            for an authentic Solo Leveling dungeon experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="dungeon-card opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 p-4 rounded-full bg-dungeon-dark inline-flex hero-glow">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 flex-grow">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 -right-20 w-60 h-60 border border-dungeon-blue-glow/10 rounded-full"></div>
      <div className="absolute bottom-1/4 -left-10 w-40 h-40 border border-dungeon-blue-glow/5 rounded-full"></div>
    </section>
  );
};

export default Features;
