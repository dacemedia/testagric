import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
          Experience the strength of enduring commitment. Our dedicated team has been by our side since the inception, demonstrating unwavering loyalty that propels us forward.
          </GridListItem>
          <GridListItem title="Trust" invert>
          Embrace a culture of trust and autonomy. We empower our team with the freedom to choose when and how they work, fostering a dynamic environment built on mutual respect.
          </GridListItem>
          <GridListItem title="Compassion" invert>
          At the heart of our community lies compassion. We understand that life is complex, and we prioritize an open, supportive atmosphere where personal challenges are acknowledged and met with empathy.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
