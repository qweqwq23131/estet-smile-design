import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Shield, Heart, Sparkles, Clock, Award } from 'lucide-react';
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
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        {/* Subtle grain texture for premium feel */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")' 
          }} 
        />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-gold-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 pt-28 lg:pt-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-3 px-6 py-3 bg-card/90 backdrop-blur-md text-foreground rounded-full text-sm font-medium mb-10 shadow-soft border border-border/50">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              Записаться можно уже сегодня
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.05] mb-8"
          >
            Здоровая улыбка
            <br />
            <span className="text-gradient">без страха</span> и боли
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
          >
            Клиника «ЭСТЕТ» — место, где забота о вашей улыбке становится комфортным опытом. 
            Современные методы, прозрачные цены, спокойная атмосфера.
          </motion.p>

          {/* Trust phrases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {trustPhrases.map((phrase) => (
              <div
                key={phrase.text}
                className="flex items-center gap-3 px-5 py-3 bg-card/70 backdrop-blur-md rounded-full border border-border/50 shadow-soft"
              >
                <phrase.icon className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">{phrase.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Button variant="cta" size="xl" className="group shadow-xl hover:shadow-2xl text-lg px-10" asChild>
              <a href="#contacts" className="relative overflow-hidden">
                <span className="relative z-10">Записаться на приём</span>
                {/* Shimmer effect */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
                />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-card/60 backdrop-blur-md border-border/60 hover:bg-card hover:border-primary/30 text-lg px-10" 
              asChild
            >
              <a href="#services">Узнать стоимость</a>
            </Button>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 lg:mt-28 flex flex-wrap gap-12 lg:gap-20"
          >
            {[
              { value: '7+', label: 'лет опыта', sublabel: 'работы врача', icon: Award },
              { value: '1000+', label: 'пациентов', sublabel: 'нам доверяют', icon: Heart },
              { value: '98%', label: 'возвращаются', sublabel: 'к нам снова', icon: Sparkles },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="flex items-start gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.15 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110 shadow-soft">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-serif text-4xl lg:text-5xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#philosophy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Узнать больше</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-12 h-12 rounded-full border-2 border-border/50 bg-card/50 backdrop-blur-sm flex items-center justify-center group-hover:border-primary/50 group-hover:bg-card transition-all duration-300 shadow-soft"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};
