import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Review = () => {
  return (
    <Section title="Client Review and Revisions" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        The Client Review phase is a juncture where clients review the course and provide their invaluable feedback, pivotal for aligning the course with the business and learning objectives. The subsequent Revisions phase is dedicated to addressing client feedback by making the necessary adjustments to the eLearning content, ensuring it meets the desired quality standards.
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

export default Review;
