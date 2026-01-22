import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, GraduationCap, Heart, ArrowRight, Quote } from 'lucide-react';
import doctorImage from '@/assets/doctor-portrait.jpg';

export const DoctorPreviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-36 bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-transparent" />
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Large decorative frame */}
              <div className="absolute -inset-8 border border-border/30 rounded-[3rem] -z-10" />
              
              {/* Secondary decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/40 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              
              {/* Main image */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-hover">
                <img
                  src={doctorImage}
                  alt="Доктор Джалилов Замир Бейдулахович"
                  className="w-full h-[500px] lg:h-[650px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating credentials card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -bottom-8 left-6 right-6 lg:-right-12 lg:left-auto lg:w-80 bg-background/95 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-hover border border-border/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-bold text-primary">7+ лет</div>
                    <div className="text-sm text-muted-foreground">практики</div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">12+ сертификатов</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-6 py-3 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium mb-8 shadow-soft">
              Ваш врач
            </span>
            
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Джалилов Замир{' '}
              <span className="text-gradient">Бейдулахович</span>
            </h2>
            
            <p className="text-primary font-semibold text-xl mb-8">
              Стоматолог · Хирург · Ортопед · Терапевт
            </p>
            
            {/* Quote */}
            <div className="relative bg-card/80 p-8 lg:p-10 rounded-3xl border border-border/50 mb-10">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
              <blockquote className="relative z-10 font-serif text-xl lg:text-2xl text-foreground italic leading-relaxed pl-6">
                «Моя задача — не просто вылечить зубы, а сделать так, чтобы вы больше никогда не боялись стоматологов»
              </blockquote>
            </div>
            
            {/* Key points */}
            <div className="space-y-5 mb-10">
              {[
                { icon: GraduationCap, text: 'Уральский государственный медицинский университет' },
                { icon: Award, text: 'Регулярное повышение квалификации' },
                { icon: Heart, text: 'Особый подход к тревожным пациентам' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Link to full section */}
            <motion.a
              href="#doctor"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group inline-flex items-center gap-3 text-primary font-semibold text-lg hover:underline"
            >
              <span>Подробнее о враче</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
