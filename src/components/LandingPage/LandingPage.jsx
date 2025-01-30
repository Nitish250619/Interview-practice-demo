import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import TopicsOverview from "../TopicsOverview/TopicsOverview";
import TestSection from "../TestSection/TestSection";
import ResourcesSection from "../ResourcesSection/ResourcesSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <TopicsOverview />
      <TestSection />
      <ResourcesSection />
    </div>
  );
};

export default LandingPage;
