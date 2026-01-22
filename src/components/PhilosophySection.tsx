import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Compass } from 'lucide-react';

const philosophyItems = [
  {
    icon: Eye,
    title: 'Наше видение',
    description: 'Стоматология без страха — когда каждый визит к врачу становится частью заботы о себе, а не испытанием.',
  },
  {
    icon: Target,
    title: 'Наша миссия',
    description: 'Дарить людям уверенность через красивые и здоровые улыбки, используя передовые технологии и человечный подход.',
  },
  {
    icon: Compass,
    title: 'Наши принципы',
    description: 'Честность, прозрачность и индивидуальный подход. Мы не лечим «зубы» — мы помогаем людям.',
  },
];

export const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-36 bg-background relative overflow-hidden" ref={ref}>
      {/* Large decorative typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-serif text-[20rem] md:text-[30rem] font-bold text-accent/20 leading-none opacity-40">
          Э
        </span>
      </div>
      
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent/10 to-transparent" />
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="text-center mb-20"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-6 py-3 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium mb-8 shadow-soft backdrop-blur-sm"
            >
              Философия клиники
            </motion.span>
            
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-8 leading-tight">
              Больше, чем просто{' '}
              <span className="text-gradient">лечение зубов</span>
            </h2>
            
            <p className="text-muted-foreground text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              «ЭСТЕТ» — это место, где современная медицина встречается с настоящей человеческой заботой. 
              Мы верим, что каждый заслуживает комфортного лечения.
            </p>
          </motion.div>

          {/* Philosophy cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {philosophyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                className="group relative"
              >
                {/* Background glow on hover */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-card/80 backdrop-blur-sm p-10 lg:p-12 rounded-3xl border border-border/50 h-full transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-hover group-hover:-translate-y-2">
                  {/* Icon */}
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/50 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:from-primary/20 group-hover:to-primary/10 shadow-soft">
                      <item.icon className="w-9 h-9 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-5 transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <blockquote className="font-serif text-2xl lg:text-3xl text-foreground/80 italic max-w-3xl mx-auto">
              «Ваша улыбка — это не просто зубы. Это уверенность, здоровье и качество жизни»
            </blockquote>
            <p className="text-primary font-medium mt-6">— Команда клиники ЭСТЕТ</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
