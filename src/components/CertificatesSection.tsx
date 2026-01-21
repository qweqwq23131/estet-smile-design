import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ZoomIn, Award, GraduationCap } from 'lucide-react';

// Generate certificate placeholders
const certificates = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Сертификат ${i + 1}`,
  year: 2017 + Math.floor(i / 2),
  type: i % 3 === 0 ? 'diploma' : 'certificate',
}));

export const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2.5 bg-accent/60 text-accent-foreground rounded-full text-sm font-medium mb-6 shadow-soft">
            Квалификация
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Экспертиза, подтверждённая <span className="text-gradient">документами</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Постоянное повышение квалификации и освоение новых методик — 
            залог качественного лечения
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-16"
        >
          {[
            { icon: GraduationCap, value: '12+', label: 'сертификатов' },
            { icon: Award, value: '7', label: 'лет практики' },
          ].map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certificates grid - expert gallery style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5"
        >
          {certificates.map((cert, index) => (
            <motion.button
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              onClick={() => setSelectedCert(cert.id)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
            >
              {/* Certificate placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-cream to-beige flex flex-col items-center justify-center p-4">
                {/* Decorative elements */}
                <div className="absolute top-3 left-3 right-3 h-px bg-primary/20" />
                <div className="absolute bottom-3 left-3 right-3 h-px bg-primary/20" />
                <div className="absolute top-3 left-3 bottom-3 w-px bg-primary/20" />
                <div className="absolute top-3 right-3 bottom-3 w-px bg-primary/20" />
                
                {cert.type === 'diploma' ? (
                  <GraduationCap className="w-10 h-10 text-primary/50 mb-3" />
                ) : (
                  <Award className="w-10 h-10 text-primary/50 mb-3" />
                )}
                
                <span className="font-serif text-lg font-semibold text-primary/80 text-center">
                  {cert.type === 'diploma' ? 'Диплом' : 'Сертификат'}
                </span>
                <span className="text-xs text-primary/50 mt-2">{cert.year} год</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center backdrop-blur-0 group-hover:backdrop-blur-sm">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                  <div className="w-12 h-12 bg-background/90 rounded-full flex items-center justify-center shadow-soft">
                    <ZoomIn className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground mt-10 text-sm"
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
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-background rounded-3xl p-6 max-w-2xl w-full shadow-hover"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-14 right-0 p-3 bg-background/20 hover:bg-background/30 rounded-full text-background transition-colors"
                aria-label="Закрыть"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Certificate placeholder content */}
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-accent via-cream to-beige flex flex-col items-center justify-center p-12">
                {/* Decorative border */}
                <div className="absolute inset-8 border-2 border-primary/20 rounded-xl" />
                
                {certificates[selectedCert - 1].type === 'diploma' ? (
                  <GraduationCap className="w-20 h-20 text-primary/40 mb-6" />
                ) : (
                  <Award className="w-20 h-20 text-primary/40 mb-6" />
                )}
                
                <h3 className="font-serif text-3xl font-bold text-primary mb-3 text-center">
                  {certificates[selectedCert - 1].type === 'diploma' ? 'Диплом' : 'Сертификат'} {selectedCert}
                </h3>
                <p className="text-primary/60 text-center">
                  {certificates[selectedCert - 1].year} год
                </p>
                <p className="text-primary/40 text-sm mt-6 text-center">
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
