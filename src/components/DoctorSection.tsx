import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Stethoscope, Heart, Quote } from 'lucide-react';
import doctorImage from '@/assets/doctor-portrait.jpg';

const qualifications = [
  {
    icon: GraduationCap,
    title: 'Образование',
    items: [
      'Уральский государственный медицинский университет',
      '2017 — Стоматология (базовое образование)',
      '2019 — Стоматология общей практики (ординатура)',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Специализации',
    items: ['Терапевтическая стоматология', 'Хирургия', 'Ортопедия', 'Общая стоматология'],
  },
];

const approaches = [
  {
    icon: Award,
    text: 'Индивидуальный план лечения для каждого',
  },
  {
    icon: Stethoscope,
    text: 'Современные методы диагностики',
  },
  {
    icon: Heart,
    text: 'Особый подход к тревожным пациентам',
  },
];

export const DoctorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="doctor" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2.5 bg-accent/60 text-accent-foreground rounded-full text-sm font-medium mb-6 shadow-soft">
            Ваш врач
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Специалист, которому <span className="text-gradient">доверяют</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Профессионализм и человечность в каждом приёме
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Doctor photo with premium styling */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 lg:sticky lg:top-32"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-6 border border-border/30 rounded-[2.5rem] -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/50 rounded-2xl -z-10" />
              
              <div className="rounded-[2rem] overflow-hidden shadow-hover">
                <img
                  src={doctorImage}
                  alt="Доктор Джалилов Замир Бейдулахович"
                  className="w-full h-[500px] lg:h-[600px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              </div>
              
              {/* Name card with enhanced styling */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 left-4 right-4 lg:left-6 lg:right-6 bg-background/95 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-hover border border-border/50"
              >
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-2">
                  Джалилов Замир Бейдулахович
                </h3>
                <p className="text-primary font-medium text-sm lg:text-base">
                  Стоматолог · Хирург · Ортопед · Терапевт
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Qualifications and approach */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 space-y-8 pt-8 lg:pt-0"
          >
            {/* Personal quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative bg-primary/5 p-8 lg:p-10 rounded-3xl border border-primary/10"
            >
              <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/20" />
              <blockquote className="relative z-10 font-serif text-xl lg:text-2xl text-foreground italic leading-relaxed">
                «Я верю, что каждый человек заслуживает комфортного лечения без страха и боли. 
                Моя задача — не просто вылечить зубы, а сделать так, чтобы вы захотели вернуться»
              </blockquote>
            </motion.div>

            {/* Qualifications */}
            {qualifications.map((qual, index) => (
              <motion.div
                key={qual.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-card p-6 lg:p-8 rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <qual.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-foreground">
                    {qual.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {qual.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground flex items-start gap-3"
                    >
                      <span className="w-2 h-2 bg-primary/60 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Professional approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gradient-to-br from-accent/40 to-accent/20 p-6 lg:p-8 rounded-2xl border border-accent"
            >
              <h4 className="font-serif text-xl font-semibold text-foreground mb-6">
                Мой подход к лечению
              </h4>
              <div className="space-y-5">
                {approaches.map((approach, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-background/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <approach.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{approach.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
