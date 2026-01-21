import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { DoctorSection } from '@/components/DoctorSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { CertificatesSection } from '@/components/CertificatesSection';
import { ContactsSection } from '@/components/ContactsSection';
import { Footer } from '@/components/Footer';
import { StickyBookButton } from '@/components/StickyBookButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DoctorSection />
        <ReviewsSection />
        <CertificatesSection />
        <ContactsSection />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  );
};

export default Index;
