import React from 'react'
import { Section1 } from '../../Marketing/Section1'
import Section4 from '../../../Homepage/Section4';
import Section5 from '../../../Homepage/Section5';
import CareerComponent from './CareerComponent';

const Career = () => {
  return (
    <div>
      <Section1
        heading="How We Make"
        subheading="The Magic Happen"
        first="Home"
        second="Company"
        third="Career"
      ></Section1>
      <CareerComponent></CareerComponent>
      <Section5></Section5>
    </div>
  );
}

export default Career
