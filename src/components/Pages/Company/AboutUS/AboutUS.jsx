import React from 'react'
import { Section1 } from '../../Marketing/Section1'
import Section2 from '../../Marketing/Section2'
import Section4 from '../../../Homepage/Section4';
import Section5 from '../../../Homepage/Section5';

const AboutUS = () => {
  return (
    <div className="">
      <Section1
        heading="Who"
        subheading="We Are ?"
        first="Home"
        second="Company"
        third="About Us"
      ></Section1>
      <Section2
        heading="Marketing Company "
        subheading="That Drives ROI From Everything"
        firstParagraph="At Media Dynox, we are dedicated to providing unparalleled solutions to meet the unique needs of your business. With a commitment to excellence and innovation, we strive to be your trusted partner in achieving your business objectives. We work closely with you to understand your goals, challenges, and vision, ensuring that our solutions are aligned with your goals and deliver measurable results."
        secondParagraph="With an ample amount of experience in the Digital experience, Media Dynox is here to fulfill all your business needs. Our teams of strategists, thinkers, developers, and content creators create and present impactful web development and digital marketing services that will bring lucrative benefits to your business."
        thirdParagraph=""
      ></Section2>
      <Section4></Section4>
      <Section5></Section5>
    </div>
  );
}

export default AboutUS
