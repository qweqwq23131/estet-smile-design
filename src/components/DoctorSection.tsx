import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Stethoscope, Heart } from 'lucide-react';
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
    text: 'Индивидуальный план лечения для каждого пациента',
  },
  {
    icon: Stethoscope,
    text: 'Современные методы диагностики и терапии',
  },
  {
    icon: Heart,
    text: 'Внимательное и спокойное отношение к пациентам',
  },
];

export const DoctorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="doctor" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium mb-4">
            Наш специалист
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            О враче
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Doctor photo and name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img
                  src={doctorImage}
                  alt="Доктор Джалилов Замир Бейдулахович"
                  className="w-full h-[500px] object-cover object-top"
                />
              </div>
              {/* Name card */}
              <div className="absolute -bottom-6 left-6 right-6 bg-background p-6 rounded-2xl shadow-card">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                  Джалилов Замир Бейдулахович
                </h3>
                <p className="text-primary font-medium">
                  Стоматолог · Хирург · Ортопед · Терапевт
                </p>
              </div>
            </div>
          </motion.div>

          {/* Qualifications and approach */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 pt-8 lg:pt-0"
          >
            {/* Qualifications */}
            {qualifications.map((qual, index) => (
              <div
                key={qual.title}
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                    <qual.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-foreground">
                    {qual.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {qual.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Professional approach */}
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h4 className="font-serif text-xl font-semibold text-foreground mb-4">
                Профессиональный подход
              </h4>
              <p className="text-muted-foreground mb-6">
                Доктор Джалилов — это сочетание профессионализма и человечности.
                Каждый пациент получает внимательное отношение и качественное лечение
                с применением современных методик.
              </p>
              <div className="space-y-4">
                {approaches.map((approach, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <approach.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{approach.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
