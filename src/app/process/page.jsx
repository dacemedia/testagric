import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import ProDev from "@/components/ProDev";
import QA from "@/components/QA";
import Review from "@/components/Review";
import Live from "@/components/Live";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="E - Learning Development" title="Our Process">
        <p>
          We believe in making things simple for our clients, the primary way we achieve this is via the following steps:
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />

        {/* Production Development */}
        <ProDev />

        {/* QA */}
        <QA />
        {/* Review */}
        <Review />
        {/* Live */}
        <Live />

      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
