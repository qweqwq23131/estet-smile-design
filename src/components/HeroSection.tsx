import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Shield, Heart, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-clinic.jpg';

const trustPhrases = [
  { icon: Shield, text: 'Безболезненно' },
  { icon: Heart, text: 'С заботой' },
  { icon: Sparkles, text: 'Эстетично' },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Интерьер стоматологической клиники ЭСТЕТ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/30" />
        {/* Subtle grain texture for premium feel */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")' }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 pt-24 lg:pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-card/80 backdrop-blur-sm text-foreground rounded-full text-sm font-medium mb-8 shadow-soft border border-border/50">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              
              Записаться можно уже сегодня
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6"
          >
            Здоровая улыбка —{' '}
            <span className="text-gradient">без страха</span>{' '}
            и боли
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
          >
            Мы создаём атмосферу спокойствия, где каждый пациент чувствует себя в безопасности. 
            Современные методы, прозрачный план лечения и искренняя забота — всё для вашего комфорта.
          </motion.p>

          {/* Trust phrases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {trustPhrases.map((phrase, index) => (
              <div
                key={phrase.text}
                className="flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-sm rounded-full border border-border/50"
              >
                <phrase.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{phrase.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="cta" size="xl" className="group shadow-lg hover:shadow-xl" asChild>
              <a href="#contacts" className="relative overflow-hidden">
                <span className="relative z-10">Записаться на приём</span>
                {/* Shimmer effect */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card" asChild>
              <a href="#services">Узнать стоимость</a>
            </Button>
          </motion.div>

          {/* Trust indicators with enhanced styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex flex-wrap gap-10 lg:gap-16"
          >
            {[
              { value: '7+', label: 'лет опыта', sublabel: 'работы врача' },
              { value: '1000+', label: 'пациентов', sublabel: 'нам доверяют' },
              { value: '98%', label: 'возвращаются', sublabel: 'к нам снова' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
              >
                <div className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with premium styling */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
      >
        <span className="text-sm font-medium tracking-wide">Узнать больше</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-10 h-10 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm flex items-center justify-center group-hover:border-primary/50 transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};
