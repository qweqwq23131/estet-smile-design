import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, Stethoscope, Sparkles, Scissors, Crown, Baby, SmilePlus, ArrowRight } from 'lucide-react';

interface Service {
  name: string;
  price: string;
  description?: string;
}

interface ServiceCategory {
  id: string;
  icon: React.ElementType;
  title: string;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'consultation',
    icon: Stethoscope,
    title: 'Консультации и базовые услуги',
    services: [
      { name: 'Первичная консультация', price: 'Бесплатно', description: 'Осмотр и план лечения' },
      { name: 'Консультация специалиста', price: 'от 500 ₽' },
      { name: 'Рентген-диагностика', price: 'от 300 ₽' },
      { name: 'Панорамный снимок', price: 'от 1 000 ₽' },
    ],
  },
  {
    id: 'hygiene',
    icon: Sparkles,
    title: 'Гигиена и пародонтология',
    services: [
      { name: 'Профессиональная гигиена', price: 'от 3 500 ₽', description: 'Комплексная чистка' },
      { name: 'Ультразвуковая чистка', price: 'от 2 000 ₽' },
      { name: 'Air Flow', price: 'от 2 500 ₽' },
      { name: 'Лечение дёсен', price: 'от 1 500 ₽' },
      { name: 'Шинирование', price: 'от 3 000 ₽' },
    ],
  },
  {
    id: 'therapy',
    icon: SmilePlus,
    title: 'Терапевтическая стоматология',
    services: [
      { name: 'Лечение кариеса', price: 'от 3 000 ₽' },
      { name: 'Лечение пульпита', price: 'от 5 000 ₽' },
      { name: 'Лечение периодонтита', price: 'от 6 000 ₽' },
      { name: 'Реставрация зуба', price: 'от 4 500 ₽' },
      { name: 'Художественная реставрация', price: 'от 7 000 ₽' },
    ],
  },
  {
    id: 'surgery',
    icon: Scissors,
    title: 'Хирургическая стоматология',
    services: [
      { name: 'Удаление зуба (простое)', price: 'от 2 000 ₽' },
      { name: 'Удаление зуба (сложное)', price: 'от 4 000 ₽' },
      { name: 'Удаление зуба мудрости', price: 'от 5 000 ₽' },
      { name: 'Имплантация', price: 'от 30 000 ₽', description: 'Под ключ' },
      { name: 'Костная пластика', price: 'от 15 000 ₽' },
    ],
  },
  {
    id: 'prosthetics-fixed',
    icon: Crown,
    title: 'Ортопедия (несъёмные)',
    services: [
      { name: 'Металлокерамическая коронка', price: 'от 8 000 ₽' },
      { name: 'Керамическая коронка E-max', price: 'от 20 000 ₽' },
      { name: 'Циркониевая коронка', price: 'от 22 000 ₽' },
      { name: 'Винир керамический', price: 'от 25 000 ₽' },
      { name: 'Мостовидный протез', price: 'от 24 000 ₽' },
    ],
  },
  {
    id: 'prosthetics-removable',
    icon: Crown,
    title: 'Ортопедия (съёмные)',
    services: [
      { name: 'Полный съёмный протез', price: 'от 25 000 ₽' },
      { name: 'Частичный съёмный протез', price: 'от 18 000 ₽' },
      { name: 'Бюгельный протез', price: 'от 35 000 ₽' },
      { name: 'Иммедиат-протез', price: 'от 10 000 ₽' },
    ],
  },
  {
    id: 'pediatric',
    icon: Baby,
    title: 'Детская стоматология',
    services: [
      { name: 'Лечение молочного зуба', price: 'от 2 500 ₽' },
      { name: 'Удаление молочного зуба', price: 'от 1 000 ₽' },
      { name: 'Герметизация фиссур', price: 'от 1 500 ₽' },
      { name: 'Серебрение', price: 'от 500 ₽' },
      { name: 'Фторирование', price: 'от 1 000 ₽' },
    ],
  },
  {
    id: 'orthodontics',
    icon: SmilePlus,
    title: 'Ортодонтия',
    services: [
      { name: 'Консультация ортодонта', price: 'от 1 000 ₽' },
      { name: 'Металлические брекеты', price: 'от 30 000 ₽' },
      { name: 'Керамические брекеты', price: 'от 45 000 ₽' },
      { name: 'Элайнеры', price: 'от 80 000 ₽' },
      { name: 'Ретейнер', price: 'от 5 000 ₽' },
    ],
  },
];

const ServiceCard = ({ category, isLast }: { category: ServiceCategory; isLast?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = category.icon;

  return (
    <motion.div
      layout
      className="bg-card rounded-2xl lg:rounded-3xl border border-border/50 overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-soft"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 lg:p-8 flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors group"
      >
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
            <Icon className="w-6 h-6 text-primary transition-transform duration-300" />
          </div>
          <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold text-foreground text-left group-hover:text-primary transition-colors">
            {category.title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 lg:px-8 pb-6 lg:pb-8 space-y-3">
              {category.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-background rounded-xl border border-border/30 gap-3 group/item hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    <div>
                      <span className="text-foreground font-medium">{service.name}</span>
                      {service.description && (
                        <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                      )}
                    </div>
                  </div>
                  <span className="text-primary font-semibold whitespace-nowrap text-lg">
                    {service.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent pointer-events-none" />
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2.5 bg-accent/60 text-accent-foreground rounded-full text-sm font-medium mb-6 shadow-soft">
            Прайс-лист
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Прозрачные <span className="text-gradient">цены</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Полный спектр стоматологических услуг. Никаких скрытых платежей — 
            вы всегда знаете стоимость лечения заранее
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-5 max-w-5xl mx-auto"
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ServiceCard category={category} isLast={index === serviceCategories.length - 1} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-muted-foreground mt-10 text-sm"
        >
          * Окончательная стоимость определяется после консультации. Первичный осмотр — бесплатно
        </motion.p>
      </div>
    </section>
  );
};
