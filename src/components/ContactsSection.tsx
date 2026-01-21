import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Phone,
    title: 'Телефон',
    value: '+7 (932) 121-03-03',
    href: 'tel:+79321210303',
  },
  {
    icon: MapPin,
    title: 'Адрес',
    value: 'г. Екатеринбург, микрорайон Светлый, 2',
    href: 'https://yandex.ru/maps/?text=Екатеринбург,+микрорайон+Светлый,+2',
  },
  {
    icon: Clock,
    title: 'Режим работы',
    value: 'Пн-Сб: 9:00 - 20:00',
  },
];

const socialLinks = [
  {
    name: 'ВКонтакте',
    href: 'https://vk.com/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.463 4 8.04c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.847 2.455 2.27 4.607 2.862 4.607.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.15-3.574 2.15-3.574.119-.254.305-.491.729-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.491-.085.745-.576.745z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    href: 'https://t.me/',
    icon: <Send className="w-5 h-5" />,
  },
];

export const ContactsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contacts" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium mb-4">
            Контакты
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Запишитесь на приём
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Свяжитесь с нами удобным для вас способом — мы всегда рады помочь
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-card p-6 rounded-2xl border border-border"
            >
              <h3 className="font-semibold text-foreground mb-4">Мы в социальных сетях</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-primary p-8 rounded-2xl text-center"
            >
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-3">
                Готовы записаться?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Позвоните нам или оставьте заявку — мы перезвоним в течение 15 минут
              </p>
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:+79321210303" className="inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Позвонить сейчас
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[400px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-card"
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A9d5c4b0f5d8e9a7c3b6f2e1a4d8c7b9e&amp;source=constructor&amp;ll=60.675515%2C56.790015&amp;z=15&amp;pt=60.675515,56.790015,pm2rdm"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="Карта расположения клиники ЭСТЕТ"
              className="grayscale-[20%]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
