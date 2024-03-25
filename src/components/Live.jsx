import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Live = () => {
  return (
    <Section title="Going Live and Evaluation" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        The Going Live phase signifies the course’s transition from development to a live platform. Post-deployment, the Evaluation stage of the ADDIE model kicks in, focusing on assessing the effectiveness of the eLearning content. This evaluation covers analyzing key metrics such as completion rates and gathering feedback from learners to measure the course’s impact. This phase isn’t merely a culmination but a stepping stone for continuous improvement, providing invaluable insights for future eLearning projects.        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
      </List>
    </Section>
  );
};

export default Live;
