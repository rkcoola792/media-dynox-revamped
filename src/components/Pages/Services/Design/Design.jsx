import React from 'react'
import { Section1 } from "../../Marketing/Section1";
import Section2 from "../../Marketing/Section2";
import Section3 from "../../Marketing/Section3";
import Section4 from "../../Marketing/Section4";
import Section8 from "../../../Homepage/Section8";
import Section9 from "../../../Homepage/Section9";
import Section10 from "../../Marketing/Section9";
const Design = () => {
  return (
    <div>
      <Section1
        heading=" Design"
        subheading=""
        first="Home"
        second="Services"
        third="Design"
      ></Section1>
      <Section2
        heading="Let Your Imagination "
        subheading="Soar and your Story Shine"
        firstParagraph="How does your business introduce your services or products to your customers? Innovatives ideas and inspiring designs convey visual identity to the audience and leave a long lasting impression to move on the continuous success journey."
        secondParagraph="In today’s digital, your brand needs a strong identity to take your business to new heights. Our creative team creates a visual identity that reflects the true value, personality, and unique selling proposition of your business/brand"
        thirdParagraph="We blend top-flight creativity with cutting-edge technology to create a brand identity. A strong brand identity conveys the right message to your audience with a personality tone and effective values."
      ></Section2>
      <Section3
        first="Graphic Designing"
        second="Brand Designing"
        third="UI-UX"
        fourth="Web Designing"
      ></Section3>
      <Section4
        heading="How We Design Your Brand Identity?"
        paragraph="We develop a personality and brand voice to create an interactive brand identity that will build trust, enhance customer experience, and boost your perceived value."
      ></Section4>
      <Section9
        heading="Designs That Captivate"
        subheading="And Convert"
      ></Section9>
      <Section8></Section8>
      <Section10></Section10>
    </div>
  );
}

export default Design
