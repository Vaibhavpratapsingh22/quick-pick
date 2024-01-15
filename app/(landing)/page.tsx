import LandingHero from "@/components/custom/LandingHero";
import LandingNav from "@/components/custom/LandingNav";
import Testimonials from "@/components/custom/Testimonials";
import React from "react";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNav />
      <LandingHero />
      <Testimonials />
    </div>
  );
};

export default LandingPage;
