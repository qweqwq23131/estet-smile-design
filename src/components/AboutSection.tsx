import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Heart, Sparkles, Users, Check } from 'lucide-react';
import clinicImage from '@/assets/clinic-interior.jpg';

const features = [
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Современные методы обезболивания и строгая стерильность',
  },
  {
    icon: Heart,
    title: 'Забота',
    description: 'Особое внимание тревожным пациентам',
  },
  {
    icon: Sparkles,
    title: 'Эстетика',
    description: 'Естественная красота улыбки',
  },
  {
    icon: Users,
    title: 'Индивидуальность',
    description: 'Персональный план лечения',
  },
];

const highlights = [
  'Спокойная атмосфера без стресса',
  'Честные цены без скрытых платежей',
  'Современное оборудование',
  'Гарантия на все виды работ',
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="about" className="py-20 md:py-32 bg-card relative overflow-hidden" ref={ref}>
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/30 to-transparent" />
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-hover">
                <img
                  src={clinicImage}
                  alt="Интерьер клиники ЭСТЕТ"
                  className="w-full h-[450px] lg:h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>
              
              {/* Decorative border */}
              <div className="absolute -inset-4 border border-border/50 rounded-[2.5rem] -z-10" />
              
              {/* Floating card with enhanced design */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-8 -right-8 lg:-right-12 bg-background p-6 lg:p-8 rounded-2xl shadow-hover max-w-[280px] border border-border/50"
              >
                <div className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">ООО</div>
                <div className="font-serif text-2xl lg:text-3xl font-bold text-primary">«ЭСТЕТ»</div>
                <div className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Лицензированная клиника эстетической стоматологии
                </div>
              </motion.div>

              {/* Small floating accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -top-4 -left-4 w-20 h-20 bg-accent/80 rounded-2xl flex items-center justify-center shadow-soft"
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-5 py-2.5 bg-accent/60 text-accent-foreground rounded-full text-sm font-medium mb-6 shadow-soft">
              О нашей клинике
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Место, где улыбки становятся <span className="text-gradient">увереннее</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Мы верим, что визит к стоматологу может быть спокойным и даже приятным. 
              В клинике «ЭСТЕТ» мы создаём атмосферу доверия, где каждый пациент — 
              не просто номер в очереди, а человек со своей историей и потребностями.
            </p>

            {/* Highlights list */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Features grid with enhanced cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group flex gap-4 p-5 rounded-2xl bg-background border border-border/50 transition-all duration-300 hover:shadow-soft hover:border-primary/20"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
