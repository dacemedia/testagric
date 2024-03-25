import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Client Review of Storyboard" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        An integral step within the Course Design and Storyboarding phase is the client review of the storyboard. This step involves presenting the storyboard to the client for their feedback and approval. It ensures that the course design aligns with the client’s expectations and objectives, facilitating a shared understanding of the course structure, content flow, and interactive elements before progressing to the Production phase. Obtaining client approval on the storyboard fosters a collaborative approach, ensuring any necessary adjustments are made early on, thereby streamlining the subsequent phases of the eLearning content development process.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
        Content Test that 100% of Knowledge gaps have been covered
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
