
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const galleryImages = [
  {
    src: "/public/lovable-uploads/7e34304a-feb9-40d7-ac5d-99ec58c2faef.png",
    alt: "Statue of God Cosplay - Full View",
    caption: "Full Statue Cosplay",
  },
  {
    src: "/public/lovable-uploads/be00755b-c33a-43a9-aa3b-92831f33e0b6.png",
    alt: "Statue of God Cosplay - Close Up",
    caption: "Intimidating Face Detail",
  },
  {
    src: "/public/lovable-uploads/d634e38f-6fc9-47f4-87aa-074c066ba446.png",
    alt: "Statue of God Cosplay - Event Photo",
    caption: "Convention Ready",
  },
  {
    src: "/public/lovable-uploads/3dbd0d59-58c4-4169-9b59-5d48a076d8f8.png",
    alt: "Statue of God Cosplay - Red Eyes",
    caption: "Glowing Red Eyes",
  },
  {
    src: "/public/lovable-uploads/4db56819-7a50-4476-86f1-011983f241f8.png",
    alt: "Statue of God Cosplay - Group Photo",
    caption: "With Other Cosplayers",
  },
  {
    src: "/public/lovable-uploads/24fb7b81-c8ab-4784-bc90-cd4ff57fcb52.png",
    alt: "Statue of God Cosplay - Mask Close-up",
    caption: "Crown Detail",
  },
  {
    src: "/public/lovable-uploads/e967ec0f-9f94-4ba5-a87e-b37350a51a58.png",
    alt: "Statue of God Cosplay - Full Body Shot",
    caption: "Imposing Presence",
  },
  {
    src: "/public/lovable-uploads/ab3f4714-016e-4bb8-a0d6-d9f0d58b58a1.png",
    alt: "Statue of God Cosplay - Full Costume",
    caption: "Complete Outfit",
  },
];

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

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
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,174,219,0.05)_0,rgba(12,20,36,0)_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={galleryRef} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
            Cosplay <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-gray-400">
            Browse our collection of stunning Statue of God cosplay showcases and be inspired
            for your next convention appearance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="relative group cursor-pointer overflow-hidden rounded-lg opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dungeon-darker to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-dungeon-blue-glow/20 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-dungeon-blue-glow/50">
                    View
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-dungeon-darker to-transparent">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white bg-dungeon-dark/50 backdrop-blur-sm p-2 rounded-full z-10"
              onClick={closeLightbox}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              className="absolute left-4 p-2 bg-dungeon-dark/50 backdrop-blur-sm rounded-full text-white"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ArrowLeft className="h-6 w-6" />
            </button>

            <div className="relative">
              <img
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                className="max-h-[80vh] max-w-full object-contain animate-fade-in"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-center">
                  {galleryImages[activeIndex].caption}
                </p>
                <p className="text-gray-400 text-xs text-center mt-1">
                  {activeIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </div>

            <button
              className="absolute right-4 p-2 bg-dungeon-dark/50 backdrop-blur-sm rounded-full text-white"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
