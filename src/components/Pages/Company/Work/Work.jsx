import React from 'react'
import { Section1 } from '../../Marketing/Section1'
import Section2 from '../../Marketing/Section2';
import Section5 from '../../../Homepage/Section5';

const Work = () => {
  return (
    <>
      <Section1
        heading="How We Make "
        subheading="The Magic Happen"
        first="Home"
        second="Company"
        third="Work"
      ></Section1>
      <Section2
        heading="Our"
        subheading="Work"
        secondParagraph="We thrive because we strive to deliver the absolute best. With each project, we aim to create a new benchmark, cross a further milestone, and cross our own expectations. Driven by utmost care and levels of grilling, each of our projects is given the same treatment as our passion projects. Our team is led by industry experts who are quite familiar with the industry’s thick and thin. They believe in working for the future, not only the present. So, each accomplishment of ours is future-proofed."
        thirdParagraph="Bring us a challenge, we’re ready to dive in headfirst!"
      ></Section2>
      <Section5></Section5>
    </>
  );
}

export default Work
