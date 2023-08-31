import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.png";
import List, { ListItem } from "./List";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        {/* <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p> */}
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <Image
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Video Production">
              We specialise in crafting beautiful, high quality video content..
            </ListItem>
            <ListItem title="Ai Chatbot development">
              We have a team of skilled developers who are experts in the latest
              ai frameworks, ready to help you deploy ai.
            </ListItem>
            <ListItem title="Workshops">
              We are at the forefront of conducting workshops with farmers. Which
              mainly means meeting up with extension officers and training them with
              relevant information.
            </ListItem>
            <ListItem title="Resource Production">
              At Agricomm we also produce various printable format books, comic books centered
              around agriculture and various materials.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
