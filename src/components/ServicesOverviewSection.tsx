import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  SmilePlus, 
  Scissors, 
  Crown, 
  Baby, 
  ArrowRight,
  Check
} from 'lucide-react';

const serviceCategories = [
  {
    icon: Stethoscope,
    title: 'Диагностика',
    description: 'Полное обследование и точный диагноз',
    services: ['Консультация', 'Рентген', 'Панорамный снимок'],
    color: 'from-blue-500/10 to-blue-600/5',
  },
  {
    icon: Sparkles,
    title: 'Гигиена',
    description: 'Профессиональный уход за полостью рта',
    services: ['Чистка зубов', 'Air Flow', 'Отбеливание'],
    color: 'from-emerald-500/10 to-emerald-600/5',
  },
  {
    icon: SmilePlus,
    title: 'Терапия',
    description: 'Лечение кариеса и восстановление зубов',
    services: ['Лечение кариеса', 'Реставрация', 'Эндодонтия'],
    color: 'from-amber-500/10 to-amber-600/5',
  },
  {
    icon: Scissors,
    title: 'Хирургия',
    description: 'Удаление зубов и имплантация',
    services: ['Удаление', 'Имплантация', 'Костная пластика'],
    color: 'from-rose-500/10 to-rose-600/5',
  },
  {
    icon: Crown,
    title: 'Протезирование',
    description: 'Коронки, виниры и мосты',
    services: ['Коронки', 'Виниры', 'Мостовидные протезы'],
    color: 'from-violet-500/10 to-violet-600/5',
  },
  {
    icon: Baby,
    title: 'Детская стоматология',
    description: 'Забота о детских улыбках',
    services: ['Лечение молочных зубов', 'Профилактика', 'Герметизация'],
    color: 'from-pink-500/10 to-pink-600/5',
  },
];

export const ServicesOverviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-36 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium mb-8 shadow-soft">
            Наши услуги
          </span>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Полный спектр{' '}
            <span className="text-gradient">стоматологических услуг</span>
          </h2>
          
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            От профилактики до сложного протезирования — мы решаем любые задачи. 
            Каждое направление ведёт опытный специалист.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative bg-card/90 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-border/50 h-full transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-hover group-hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110 shadow-soft">
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                {/* Title & description */}
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3 transition-colors group-hover:text-primary">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>
                
                {/* Services list */}
                <ul className="space-y-3 mb-8">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Link */}
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline group/link"
                >
                  <span>Узнать цены</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full price list CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#services"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-card border-2 border-border hover:border-primary/30 rounded-2xl font-semibold text-lg text-foreground shadow-soft hover:shadow-hover transition-all duration-300"
          >
            <span>Смотреть полный прайс-лист</span>
            <ArrowRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
