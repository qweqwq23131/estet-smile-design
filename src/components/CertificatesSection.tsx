import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

// Generate certificate placeholders
const certificates = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Сертификат ${i + 1}`,
  // Using placeholder colors for certificate representations
  color: [
    'from-amber-100 to-amber-200',
    'from-orange-100 to-orange-200',
    'from-yellow-100 to-yellow-200',
    'from-lime-100 to-lime-200',
  ][i % 4],
}));

export const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium mb-4">
            Квалификация
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Сертификаты и дипломы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Подтверждение квалификации и постоянное повышение профессионального уровня
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {certificates.map((cert, index) => (
            <motion.button
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              onClick={() => setSelectedCert(cert.id)}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300"
            >
              {/* Certificate placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif text-lg font-bold text-primary">{cert.id}</span>
                  </div>
                  <span className="text-sm font-medium text-primary/70">{cert.title}</span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-8 h-8 text-primary" />
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Modal for enlarged certificate */}
      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-background rounded-2xl p-4 max-w-2xl w-full"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 p-2 text-background hover:text-accent transition-colors"
                aria-label="Закрыть"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Certificate placeholder content */}
              <div className={`aspect-[3/4] rounded-xl bg-gradient-to-br ${certificates[selectedCert - 1].color} flex items-center justify-center`}>
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif text-4xl font-bold text-primary">{selectedCert}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                    Сертификат {selectedCert}
                  </h3>
                  <p className="text-primary/70">
                    Здесь будет отображаться сертификат специалиста
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
