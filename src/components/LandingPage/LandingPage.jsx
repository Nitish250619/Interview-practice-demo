import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import TopicsOverview from "../TopicsOverview/TopicsOverview";
import TestSection from "../TestSection/TestSection";
import MachineCodingRound from "../MachineCodingRound/MachineCodingRound";


const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <TopicsOverview />
      <TestSection />
      <MachineCodingRound/>
    </div>
  );
};

export default LandingPage;
