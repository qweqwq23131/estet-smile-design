import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Heart, Sparkles, Users } from 'lucide-react';
import clinicImage from '@/assets/clinic-interior.jpg';

const features = [
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Строгое соблюдение стандартов стерильности и современные методы обезболивания',
  },
  {
    icon: Heart,
    title: 'Забота',
    description: 'Внимательное отношение к каждому пациенту, включая тревожных',
  },
  {
    icon: Sparkles,
    title: 'Эстетика',
    description: 'Естественная красота улыбки с использованием передовых технологий',
  },
  {
    icon: Users,
    title: 'Индивидуальность',
    description: 'Персональный план лечения с учётом всех особенностей организма',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={clinicImage}
                alt="Интерьер клиники ЭСТЕТ"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl shadow-card max-w-[240px]"
            >
              <div className="font-serif text-4xl font-bold text-primary mb-1">ООО</div>
              <div className="font-serif text-2xl font-bold text-primary">«ЭСТЕТ»</div>
              <div className="text-sm text-muted-foreground mt-2">
                Лицензированная стоматологическая клиника
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium mb-4">
              О нашей клинике
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Философия заботы о вашей улыбке
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Клиника «ЭСТЕТ» — это современный центр стоматологии, где передовые технологии
              сочетаются с чутким отношением к каждому пациенту. Мы создаём атмосферу
              спокойствия и доверия, где даже самые тревожные пациенты чувствуют себя комфортно.
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
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
