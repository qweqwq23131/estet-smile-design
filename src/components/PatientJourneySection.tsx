import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Stethoscope, FileText, Wrench, Sparkles, Heart, ArrowRight } from 'lucide-react';

const journeySteps = [
  {
    step: '01',
    icon: Phone,
    title: 'Запись на приём',
    description: 'Позвоните или напишите — мы подберём удобное время. Первичная консультация бесплатна.',
    accent: 'Бесплатно',
  },
  {
    step: '02',
    icon: Stethoscope,
    title: 'Диагностика',
    description: 'Полный осмотр, современная рентген-диагностика. Определяем состояние и потребности.',
    accent: 'Точность',
  },
  {
    step: '03',
    icon: FileText,
    title: 'План лечения',
    description: 'Составляем индивидуальный план с прозрачной стоимостью. Никаких скрытых платежей.',
    accent: 'Прозрачность',
  },
  {
    step: '04',
    icon: Wrench,
    title: 'Лечение',
    description: 'Проводим все процедуры бережно и безболезненно. Современные методы обезболивания.',
    accent: 'Без боли',
  },
  {
    step: '05',
    icon: Sparkles,
    title: 'Результат',
    description: 'Красивая и здоровая улыбка. Даём рекомендации по уходу и гарантию на работу.',
    accent: 'Гарантия',
  },
  {
    step: '06',
    icon: Heart,
    title: 'Поддержка',
    description: 'Остаёмся на связи. Профилактические осмотры и профессиональная гигиена.',
    accent: 'Забота',
  },
];

export const PatientJourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-card via-background to-card relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium mb-8 shadow-soft backdrop-blur-sm">
            Путь пациента
          </span>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            От первого звонка до{' '}
            <span className="text-gradient">идеальной улыбки</span>
          </h2>
          
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Понятный и комфортный процесс на каждом этапе. 
            Вы всегда знаете, что происходит и что будет дальше.
          </p>
        </motion.div>

        {/* Journey timeline - desktop */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent origin-left"
            style={{ top: '60px' }}
          />
          
          <div className="grid grid-cols-6 gap-6">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.12 }}
                className="relative group"
              >
                {/* Step circle */}
                <div className="relative mb-8 flex justify-center">
                  <motion.div 
                    className="w-28 h-28 rounded-full bg-gradient-to-br from-background via-card to-background border-2 border-border flex items-center justify-center relative z-10 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-hover"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-accent/50 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </motion.div>
                  
                  {/* Step number */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold shadow-soft">
                    {step.step}
                  </span>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                    {step.accent}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 transition-colors group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey timeline - mobile/tablet */}
        <div className="lg:hidden space-y-6">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Connecting line */}
              {index < journeySteps.length - 1 && (
                <div className="absolute left-9 top-20 bottom-0 w-px bg-border" />
              )}
              
              <div className="flex gap-6 group">
                {/* Icon circle */}
                <div className="flex-shrink-0 relative">
                  <div className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/20 group-hover:to-primary/10 shadow-soft">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold shadow-soft">
                    {step.step}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    {step.accent}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2 transition-colors group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <a
            href="#contacts"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <span>Начать свой путь</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
