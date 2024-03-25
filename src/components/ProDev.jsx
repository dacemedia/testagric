import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const ProDev = () => {
  return (
    <Section title="Production and Development" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        The Production phase is where the course blueprint transforms into engaging eLearning content. This phase encompasses a range of tasks such as scriptwriting, creating graphics and animations, and integrating interactive elements to enhance learner engagement. Following this, the project moves into the Development stage of the ADDIE model. Here, the instructional materials are assembled, and the eLearning course begins to take shape. The collaboration between instructional designers and developers is crucial in this phase to ensure the alignment of the course with the learning objectives.
        </p>
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

export default ProDev;
