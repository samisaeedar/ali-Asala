import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 600px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden animate-in slide-in-from-bottom duration-300">
      <div className="grid grid-cols-2 h-16 divide-x divide-x-reverse divide-gray-200">
        <a 
          href="tel:777403614" 
          className="flex items-center justify-center gap-2 text-primary font-bold hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <Phone size={20} className="fill-current" />
          <span>اتصال</span>
        </a>
        <a 
          href="https://wa.me/967777403614" 
          className="flex items-center justify-center gap-2 text-green-600 font-bold hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <MessageCircle size={20} />
          <span>واتساب</span>
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;