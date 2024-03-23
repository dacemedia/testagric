import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our goal"
        title="Unlocking human potential in agriculture with digital and communication tools."
        invert
      >
        <p>
          We envision a continent empowered to feed the world.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Our Vision" invert>
          To revolutionize agricultural extension services across Africa by empowering extension officers and farmers with the tools, knowledge, and networks needed to drive agricultural innovation, sustainability, and community prosperity.
          </GridListItem>
          <GridListItem title="Our Mission" invert>
          To ensure that every extension officer and farmer is equipped, empowered, and inspired to make a significant impact in the communities they serve, thereby driving the transformation toward a more productive, sustainable, and resilient agricultural sector in Africa.
          </GridListItem>
          <GridListItem title="Our Commitment" invert>
          Transforming the landscape of agricultural extension.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
