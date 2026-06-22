import React from "react";
import HeroSection from "./hero-section";
import ServicesSection from "./services-section";
import HowItWorksSection from "./how-it-works-section";
import DriversSection from "./drivers-section";
import TestimonialsSection from "./testimonials-section";
import CTASection from "./cta-section";

const Dashboard: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <DriversSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Dashboard;
