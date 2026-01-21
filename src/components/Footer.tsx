import { Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#about', label: 'О нас' },
  { href: '#services', label: 'Услуги' },
  { href: '#doctor', label: 'О враче' },
  { href: '#contacts', label: 'Контакты' },
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

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="font-serif text-3xl font-bold">ЭСТЕТ</span>
            </a>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Стоматологическая клиника с индивидуальным подходом к каждому пациенту.
              Современные методы лечения, комфорт и забота на каждом этапе.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="#contacts">Записаться на приём</a>
            </Button>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Навигация</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+79321210303"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +7 (932) 121-03-03
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>г. Екатеринбург, микрорайон Светлый, 2</span>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {currentYear} ООО «ЭСТЕТ». Все права защищены.</p>
            <p>ИНН: XXXXXXXXXX | ОГРН: XXXXXXXXXXXXX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
