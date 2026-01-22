import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ZoomIn, Award, GraduationCap, BookOpen, Calendar } from 'lucide-react';

// Generate certificate placeholders with more detail
const certificates = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Сертификат ${i + 1}`,
  year: 2017 + Math.floor(i / 2),
  type: i % 4 === 0 ? 'diploma' : i % 4 === 1 ? 'advanced' : 'certificate',
  category: i < 4 ? 'Базовое образование' : i < 8 ? 'Повышение квалификации' : 'Специализация',
}));

const stats = [
  { icon: GraduationCap, value: '12+', label: 'сертификатов и дипломов' },
  { icon: Award, value: '7', label: 'лет клинической практики' },
  { icon: BookOpen, value: '4', label: 'специализации' },
  { icon: Calendar, value: 'Ежегодно', label: 'повышение квалификации' },
];

export const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium mb-8 shadow-soft backdrop-blur-sm">
            Квалификация
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Экспертиза, подтверждённая{' '}
            <span className="text-gradient">документами</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Постоянное развитие и освоение новых методик — 
            залог качественного лечения на уровне ведущих клиник
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-border/50 text-center group hover:border-primary/20 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates grid - expert gallery style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.button
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              onClick={() => setSelectedCert(cert.id)}
              className="group relative aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-3"
            >
              {/* Certificate placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cream via-accent/50 to-beige flex flex-col items-center justify-center p-4">
                {/* Decorative border frame */}
                <div className="absolute inset-3 border border-primary/15 rounded-xl" />
                <div className="absolute inset-4 border border-primary/10 rounded-lg" />
                
                {cert.type === 'diploma' ? (
                  <GraduationCap className="w-12 h-12 text-primary/40 mb-3" />
                ) : cert.type === 'advanced' ? (
                  <BookOpen className="w-12 h-12 text-primary/40 mb-3" />
                ) : (
                  <Award className="w-12 h-12 text-primary/40 mb-3" />
                )}
                
                <span className="font-serif text-lg font-semibold text-primary/70 text-center">
                  {cert.type === 'diploma' ? 'Диплом' : cert.type === 'advanced' ? 'Повышение' : 'Сертификат'}
                </span>
                <span className="text-xs text-primary/40 mt-2">{cert.year} год</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center backdrop-blur-0 group-hover:backdrop-blur-sm">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                  <div className="w-14 h-14 bg-background/95 rounded-full flex items-center justify-center shadow-soft">
                    <ZoomIn className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          Нажмите на сертификат для увеличения
        </motion.p>
      </div>

      {/* Modal for enlarged certificate */}
      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-background rounded-3xl p-8 max-w-2xl w-full shadow-hover"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-16 right-0 p-4 bg-background/20 hover:bg-background/30 rounded-full text-background transition-colors"
                aria-label="Закрыть"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Certificate placeholder content */}
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-cream via-accent/50 to-beige flex flex-col items-center justify-center p-12 relative">
                {/* Decorative border */}
                <div className="absolute inset-6 border-2 border-primary/20 rounded-xl" />
                <div className="absolute inset-8 border border-primary/10 rounded-lg" />
                
                {certificates[selectedCert - 1].type === 'diploma' ? (
                  <GraduationCap className="w-24 h-24 text-primary/35 mb-8" />
                ) : certificates[selectedCert - 1].type === 'advanced' ? (
                  <BookOpen className="w-24 h-24 text-primary/35 mb-8" />
                ) : (
                  <Award className="w-24 h-24 text-primary/35 mb-8" />
                )}
                
                <h3 className="font-serif text-3xl font-bold text-primary mb-4 text-center">
                  {certificates[selectedCert - 1].type === 'diploma' ? 'Диплом' : 
                   certificates[selectedCert - 1].type === 'advanced' ? 'Повышение квалификации' : 
                   'Сертификат'} {selectedCert}
                </h3>
                <p className="text-primary/50 text-center mb-2">
                  {certificates[selectedCert - 1].year} год
                </p>
                <p className="text-primary/40 text-sm text-center">
                  {certificates[selectedCert - 1].category}
                </p>
                <p className="text-primary/30 text-xs mt-8 text-center">
                  Здесь будет отображаться документ специалиста
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
