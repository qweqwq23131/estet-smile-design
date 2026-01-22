import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Calendar, Shield, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reassurances = [
  { icon: Shield, text: 'Безболезненно' },
  { icon: Clock, text: 'Первый приём — бесплатно' },
  { icon: Star, text: 'Гарантия на все работы' },
];

export const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-36 relative overflow-hidden" ref={ref}>
      {/* Rich background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-brown-dark" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-transparent via-transparent to-foreground/10" />
      </div>
      
      {/* Grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")' 
        }} 
      />
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-3 bg-primary-foreground/10 text-primary-foreground/90 rounded-full text-sm font-medium mb-10 backdrop-blur-sm border border-primary-foreground/10">
              Начните заботу о себе сегодня
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-8 leading-tight"
          >
            Готовы увидеть свою{' '}
            <span className="relative">
              новую улыбку
              <motion.span 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-foreground/30 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
            ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-foreground/80 text-xl lg:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Запишитесь на бесплатную консультацию. 
            Мы составим индивидуальный план лечения и ответим на все ваши вопросы.
          </motion.p>

          {/* Reassurance badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-14"
          >
            {reassurances.map((item, index) => (
              <div
                key={item.text}
                className="flex items-center gap-3 px-5 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/10"
              >
                <item.icon className="w-5 h-5 text-primary-foreground/70" />
                <span className="text-primary-foreground/90 font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Button 
              variant="secondary" 
              size="xl" 
              className="group shadow-xl hover:shadow-2xl text-lg px-10"
              asChild
            >
              <a href="tel:+79321210303" className="inline-flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>Позвонить</span>
              </a>
            </Button>
            
            <Button 
              variant="outline"
              size="xl" 
              className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 text-lg px-10 group"
              asChild
            >
              <a href="#contacts" className="inline-flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                <span>Записаться онлайн</span>
              </a>
            </Button>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-primary-foreground/50 text-sm"
          >
            Более 1000 довольных пациентов доверяют нам свои улыбки
          </motion.p>
        </div>
      </div>
    </section>
  );
};
