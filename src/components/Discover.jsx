import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Project Initiation and Analysis" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        The beginning of any eLearning project is crucial as it sets the tone and direction for the entire venture. The initial phase, known as the project kick-off, is key in aligning stakeholders to the project’s goals, scope, and expectations. This alignment fosters a collaborative spirit, crucial for the successful fruition of the project. Following the kick-off, the project moves into the Analysis stage, marking the start of the ADDIE (Analysis, Design, Development, Implementation, Evaluation) model, a highly-regarded framework in the eLearning content development process. This phase is focused on understanding the learner’s needs and establishing clear learning objectives, laying a solid foundation for the phases that follow.
        </p>
        
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
