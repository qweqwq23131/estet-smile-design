import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Phone,
    title: 'Телефон',
    value: '+7 (932) 121-03-03',
    href: 'tel:+79321210303',
    sublabel: 'Звоните, мы ответим',
  },
  {
    icon: MapPin,
    title: 'Адрес',
    value: 'г. Екатеринбург, микрорайон Светлый, 2',
    href: 'https://yandex.ru/maps/?text=Екатеринбург,+микрорайон+Светлый,+2',
    sublabel: 'Удобная парковка рядом',
  },
  {
    icon: Clock,
    title: 'Режим работы',
    value: 'Пн-Сб: 9:00 - 20:00',
    sublabel: 'Воскресенье — выходной',
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
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="contacts" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2.5 bg-accent/60 text-accent-foreground rounded-full text-sm font-medium mb-6 shadow-soft">
            Контакты
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Готовы к <span className="text-gradient">встрече</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Свяжитесь с нами удобным способом — мы перезвоним в течение 15 минут
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact cards with enhanced styling */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group bg-card p-6 lg:p-8 rounded-2xl border border-border/50 flex items-start gap-5 hover:border-primary/20 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-foreground font-medium">{item.value}</span>
                  )}
                  {item.sublabel && (
                    <p className="text-sm text-muted-foreground mt-1">{item.sublabel}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-card p-6 lg:p-8 rounded-2xl border border-border/50"
            >
              <div className="flex items-center gap-3 mb-5">
                <MessageCircle className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground text-lg">Мы в социальных сетях</h3>
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Premium CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="relative overflow-hidden bg-primary p-8 lg:p-10 rounded-3xl"
            >
              {/* Decorative pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-foreground/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-foreground/5 rounded-full blur-xl" />
              
              <div className="relative z-10">
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                  Готовы записаться?
                </h3>
                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                  Первичная консультация — бесплатно. Позвоните, и мы подберём удобное время для вашего визита
                </p>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl" asChild>
                  <a href="tel:+79321210303" className="inline-flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    Позвонить сейчас
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Map with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="h-[450px] lg:h-full min-h-[550px] rounded-3xl overflow-hidden shadow-hover border border-border/30">
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
                className="grayscale-[15%]"
              />
            </div>
            
            {/* Floating address card on map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:w-72 bg-background/95 backdrop-blur-sm p-5 rounded-2xl shadow-hover border border-border/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Мы здесь</span>
              </div>
              <p className="text-sm text-muted-foreground">
                микрорайон Светлый, 2
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
