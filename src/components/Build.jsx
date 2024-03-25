import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Course Design and Storyboarding" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Having a clear understanding of the learners’ needs makes the transition into the Design phase smooth. The insights from the Analysis phase are utilized to draft a blueprint that outlines the learning journey. A key tool used in this phase is Storyboarding, serving as a visual map of the course flow, detailing the sequence of content, interactions, and assessments. This visualization tool not only aids in obtaining client approval but also ensures that all stakeholders share a unified vision of the course’s structure and flow, reducing the likelihood of major revisions later on.
        </p>
       
      </div>
      <Blockquote
        author={{ name: "Dr Dickson Pele", role: "Livestock Adviser" }}
        className="mt-12"
      >
        Agricomm were so good in there process of storyboarding
      </Blockquote>
    </Section>
  );
};

export default Build;
