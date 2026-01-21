import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const StickyBookButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 md:hidden"
        >
          <Button variant="cta" size="lg" asChild className="shadow-lg">
            <a href="#contacts" className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Записаться</span>
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
