import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, Stethoscope, Sparkles, Scissors, Crown, Baby, SmilePlus } from 'lucide-react';

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
      { name: 'Первичная консультация', price: 'Бесплатно', description: 'Осмотр, рекомендации по лечению' },
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
      { name: 'Профессиональная гигиена', price: 'от 3 500 ₽', description: 'Комплексная чистка зубов' },
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
      { name: 'Имплантация', price: 'от 30 000 ₽', description: 'Установка импланта под ключ' },
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

const ServiceCard = ({ category }: { category: ServiceCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = category.icon;

  return (
    <motion.div
      layout
      className="bg-card rounded-2xl border border-border overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground text-left">
            {category.title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-3">
              {category.services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted/50 rounded-xl gap-2"
                >
                  <div>
                    <span className="text-foreground font-medium">{service.name}</span>
                    {service.description && (
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    )}
                  </div>
                  <span className="text-primary font-semibold whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium mb-4">
            Прайс-лист
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Полный спектр стоматологических услуг для всей семьи. Нажмите на категорию,
            чтобы увидеть подробный прайс.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4 max-w-4xl mx-auto"
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ServiceCard category={category} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground mt-8"
        >
          * Окончательная стоимость определяется после консультации специалиста
        </motion.p>
      </div>
    </section>
  );
};
