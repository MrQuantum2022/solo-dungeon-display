
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    cosplayInterest: 'statue',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your interest in the Statue of God cosplay.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: '',
        cosplayInterest: 'statue',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,174,219,0.05)_0,rgba(12,20,36,0)_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
            Join Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-gray-400">
            Connect with fellow cosplayers and get updates on new designs, events, and techniques.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 md:p-10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 border border-dungeon-blue-glow/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 border border-dungeon-blue-glow/10 rounded-full"></div>
            
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/5">
                <h3 className="text-2xl font-semibold mb-4 text-white">Get In Touch</h3>
                <p className="text-gray-400 mb-6">
                  Have questions about our cosplay designs or interested in participating in our community events?
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-dungeon-blue-glow/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dungeon-blue-glow" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email us at</p>
                      <p className="text-white">contact@statuecosplay.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-dungeon-blue-glow/20 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dungeon-blue-glow" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Find us at</p>
                      <p className="text-white">Major Comic Conventions Worldwide</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {['instagram', 'twitter', 'facebook', 'discord'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-dungeon-dark border border-dungeon-blue-glow/30 flex items-center justify-center transition-all duration-300 hover:bg-dungeon-blue-glow/20"
                    >
                      <img 
                        src={`https://api.iconify.design/simple-icons:${social}.svg?color=%231EAEDB`} 
                        alt={social}
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="md:w-3/5">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-dungeon-dark/50 border border-dungeon-blue-glow/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-dungeon-blue-glow/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-dungeon-dark/50 border border-dungeon-blue-glow/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-dungeon-blue-glow/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="cosplayInterest" className="block text-sm font-medium text-gray-400 mb-1">
                      Interested In
                    </label>
                    <select
                      id="cosplayInterest"
                      name="cosplayInterest"
                      value={formData.cosplayInterest}
                      onChange={handleChange}
                      className="w-full bg-dungeon-dark/50 border border-dungeon-blue-glow/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-dungeon-blue-glow/50"
                    >
                      <option value="statue">Statue of God Cosplay</option>
                      <option value="shadow">Shadow Monarch Cosplay</option>
                      <option value="hunters">Hunter Cosplay</option>
                      <option value="accessories">Accessories Only</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-dungeon-dark/50 border border-dungeon-blue-glow/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-dungeon-blue-glow/50"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full bg-dungeon-blue-glow/80 hover:bg-dungeon-blue-glow text-white font-medium py-2 px-4 rounded-md transition-all duration-300",
                        isSubmitting && "opacity-70 cursor-not-allowed"
                      )}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
