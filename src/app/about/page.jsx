import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";



import { StatList, StatListItem } from "@/components/StatList";
import React from "react";


const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which puts farmers at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          As AgriComm Media continues to evolve since its inception in 2014,  it remains steadfast in its dedication to leveraging media and technology for agricultural transformation. Its ongoing initiatives and projects reflect a deep understanding of the needs of the agricultural community and a commitment to driving innovation, growth, and sustainability in Zambian agriculture.
          </p>
          <p>
            At Agricomm, we’re more than just colleagues — we’re a family.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="4" label="Innovations Developed" />
          <StatListItem value="10" label="Provinces we work in" />
          <StatListItem value="2500" label="Farmers Trained" />
        </StatList>

   
   
      </Container>

      
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
