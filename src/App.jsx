// Sections
import ButtonGradient from "./assets/svg/ButtonGradient";
import NavbarSection from "./sections/navbar/navbarSection";
import HeroSection from "./sections/hero/heroSection";
import BenefitsSection from "./sections/benefits/benefitsSection";
import CollaborationSection from "./sections/collaboration/collaborationSection";
import ServicesSection from "./sections/services/servicesSection";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <NavbarSection />
        <HeroSection />
        <BenefitsSection />
        <CollaborationSection />
        <ServicesSection />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
