import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Clock, Heart, Award, Sparkles, Zap } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    title: 'Безболезненное лечение',
    description: 'Современная анестезия и бережный подход. Вы не почувствуете дискомфорта — мы гарантируем.',
    accent: 'Комфорт',
  },
  {
    icon: Clock,
    title: 'Уважаем ваше время',
    description: 'Приём строго по записи, без очередей. Мы планируем каждый визит с точностью до минуты.',
    accent: 'Точность',
  },
  {
    icon: Heart,
    title: 'Забота о тревожных пациентах',
    description: 'Спокойная атмосфера и поддержка на каждом этапе. Даже если вы боитесь стоматологов.',
    accent: 'Поддержка',
  },
  {
    icon: Award,
    title: 'Честные цены',
    description: 'Прозрачная стоимость без скрытых платежей. Вы всегда знаете финальную сумму заранее.',
    accent: 'Прозрачность',
  },
  {
    icon: Sparkles,
    title: 'Результат, который виден',
    description: 'Эстетика и здоровье в каждой улыбке. Мы работаем на долгосрочный результат.',
    accent: 'Качество',
  },
  {
    icon: Zap,
    title: 'Современные технологии',
    description: 'Новейшее оборудование и проверенные материалы от ведущих производителей.',
    accent: 'Технологии',
  },
];

export const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-36 bg-card relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
      </div>
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium mb-8 shadow-soft backdrop-blur-sm">
            Почему выбирают нас
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 leading-tight">
            Доверие, которое мы{' '}
            <span className="text-gradient">заслужили</span>
          </h2>
          <p className="text-muted-foreground text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Более 1000 пациентов уже доверили нам свои улыбки. 
            Вот почему они возвращаются и рекомендуют нас близким.
          </p>
        </motion.div>

        {/* Trust cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
              
              <div className="relative bg-background/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-border/50 h-full transition-all duration-500 group-hover:shadow-hover group-hover:-translate-y-3 group-hover:border-primary/20">
                {/* Accent badge */}
                <span className="absolute top-6 right-6 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.accent}
                </span>
                
                {/* Icon */}
                <div className="relative mb-8">
                  <div className="w-18 h-18 bg-gradient-to-br from-accent to-accent/50 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-primary/15 group-hover:to-primary/10 group-hover:scale-110 shadow-soft">
                    <item.icon className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  {/* Subtle glow */}
                  <div className="absolute inset-0 w-18 h-18 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4 transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-lg">
            <span className="font-semibold text-foreground">98% пациентов</span> рекомендуют нас своим близким
          </p>
        </motion.div>
      </div>
    </section>
  );
};
