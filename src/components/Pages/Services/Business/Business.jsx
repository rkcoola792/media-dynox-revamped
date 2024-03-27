import React from 'react'
import { Section1 } from '../../Marketing/Section1';
import Section2 from '../../Marketing/Section2';
import Section3 from '../../Marketing/Section3';
import Section4 from '../../Marketing/Section4';
import Section8 from '../../../Homepage/Section8';
import Section9 from '../../../Homepage/Section9';
import Section10 from '../../Marketing/Section9';

const Business = () => {
  return (
    <div>
      <Section1
        heading=" Business"
        subheading=""
        first="Home"
        second="Services"
        third="Business"
      ></Section1>
      <Section2
        heading="Reach Your Business Potential And Beyond"
        firstParagraph="Media Dynox brings you a plethora of business communication services that fully cater to the marketing and advertising needs of your business."
        secondParagraph="What information should you relay to your audience? How should you do it? And when? We let you know each and every one of these to make your communication more effective."
        thirdParagraph="All you need to do is sit back and relax while we take over your communication channels to inculcate a memorable brand persona."
      ></Section2>
      <Section3
        first="Branding"
        second="Media Strategy & Planning"
        third="Public Relation"
        fourth="Brand Reputation"
      ></Section3>
      <Section4
        heading="Our Process, At A Glance"
        paragraph="Explore the easiest and the most effective way to reach new heights in the business world."
      ></Section4>
      <Section9
        heading="Our Vision Is Clear,"
        subheading="Let’s Make Yours Too"
      ></Section9>
      <Section8></Section8>
      <Section10></Section10>
    </div>
  );
}

export default Business
