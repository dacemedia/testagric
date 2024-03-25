import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/qa.jpg";
import List, { ListItem } from "./List";

const QA = () => {
  return (
    <Section title="Quality Assurance and Testing" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Quality Assurance (QA) and Testing are crucial phases ensuring the eLearning content is free from technical glitches and aligns with the predetermined learning objectives. Systematic testing identifies and corrects any discrepancies before the course reaches the learners. An integral part of this phase is the beta delivery, where a nearly finalized version of the course is shared with a select group of users for initial feedback. The insights obtained from this phase are instrumental in fine-tuning the course.        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="">
        Focus group testing and Fine tuning
        </ListItem>
      </List>
    </Section>
  );
};

export default QA;
