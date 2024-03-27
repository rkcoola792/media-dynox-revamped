import React from 'react'
import { Section1 } from '../../Marketing/Section1';
import Section2 from '../../Marketing/Section2';
import Section3 from '../../Marketing/Section3';
import Section4 from '../../Marketing/Section4';
import Section8 from '../../../Homepage/Section8';
import Section9 from '../../../Homepage/Section9';
import Section10 from '../../Marketing/Section9';

const Technology = () => {
  return (
    <div>
      <Section1
        heading="Technology"
        subheading=""
        first="Home"
        second="Services"
        third="Technology"
      ></Section1>
      <Section2
        heading="We Deliver High-caliber, Dependable, and "
        subheading="Customized Technology Service"
        firstParagraph="Technology Services for Cutting-Edge Digital Marketing Discover innovative ideas with cutting-edge technology to kill the competition in the competitive market. We offer a comprehensive suite of technology services that are specifically designed to enhance digital marketing metrics."
        secondParagraph="We integrated the latest technologies, automation tools, data analytics, and artificial intelligence with effective strategies to align your business goals and brand objectives."
        thirdParagraph="At our technology services, we deliver results-driven customized solutions to meet the unique needs of your business to drive growth, engagement, and ROI."
      ></Section2>
      <Section3
        first="Web Development"
        second="App Development"
        third="Software Development"
        fourth="Enterprise Solution"
      ></Section3>
      <Section4
        heading="How Do We Work?"
        paragraph="We bring innovative solutions with pioneering technology to deliver the most efficient solutions which are in line with your business."
      ></Section4>
      <Section8></Section8>
      <Section9
        heading="Future Proof Your Business"
        subheading="Right Away"
      ></Section9>
      <div className='mt-32'>
        <Section10></Section10>
      </div>
    </div>
  );
}

export default Technology
