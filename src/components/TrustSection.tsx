import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Clock, Heart, Award, Sparkles } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    title: 'Безболезненное лечение',
    description: 'Современная анестезия и бережный подход — вы не почувствуете дискомфорта',
  },
  {
    icon: Clock,
    title: 'Уважаем ваше время',
    description: 'Приём строго по записи, без очередей. Мы ценим каждую минуту вашего дня',
  },
  {
    icon: Heart,
    title: 'Забота о тревожных пациентах',
    description: 'Спокойная атмосфера и поддержка на каждом этапе — даже если вы боитесь стоматологов',
  },
  {
    icon: Award,
    title: 'Честные цены',
    description: 'Прозрачная стоимость без скрытых платежей. Вы всегда знаете, за что платите',
  },
  {
    icon: Sparkles,
    title: 'Результат, который виден',
    description: 'Эстетика и здоровье в каждой улыбке. Работаем на долгосрочный результат',
  },
];

export const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2.5 bg-accent/60 text-accent-foreground rounded-full text-sm font-medium mb-6 shadow-soft">
            Почему выбирают нас
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
            Доверие, которое мы <span className="text-gradient">заслужили</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Более 1000 пациентов уже доверили нам свои улыбки. Вот почему они возвращаются и рекомендуют нас близким
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="bg-card p-8 rounded-3xl border border-border h-full transition-all duration-500 hover:shadow-hover hover:-translate-y-2 hover:border-primary/20">
                {/* Icon with glow effect */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
                    <item.icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
