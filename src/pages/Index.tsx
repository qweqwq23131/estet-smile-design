import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { TrustSection } from '@/components/TrustSection';
import { AboutSection } from '@/components/AboutSection';
import { DoctorPreviewSection } from '@/components/DoctorPreviewSection';
import { ServicesOverviewSection } from '@/components/ServicesOverviewSection';
import { PatientJourneySection } from '@/components/PatientJourneySection';
import { DoctorSection } from '@/components/DoctorSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { CertificatesSection } from '@/components/CertificatesSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { ContactsSection } from '@/components/ContactsSection';
import { Footer } from '@/components/Footer';
import { StickyBookButton } from '@/components/StickyBookButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <TrustSection />
        <ServicesOverviewSection />
        <DoctorPreviewSection />
        <PatientJourneySection />
        <AboutSection />
        <DoctorSection />
        <ServicesSection />
        <ReviewsSection />
        <CertificatesSection />
        <FinalCTASection />
        <ContactsSection />
      </main>
      <Footer />
      <StickyBookButton />
    </div>
  );
};

export default Index;
