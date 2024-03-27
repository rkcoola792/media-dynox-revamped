import React from 'react'
import { Section1 } from '../../Marketing/Section1'
import Section5 from '../../../Homepage/Section5';
import Section2 from '../../Marketing/Section2';

const Team = () => {
  return (
    <div className="team">
      <Section1
        heading="The Ones Who "
        subheading="Run The Show"
        first="Home"
        second="Company"
        third="Team"
      ></Section1>
      <Section2
        heading="Our "
        subheading="Team"
        firstParagraph="Media Dynox is an amalgamation of each brilliant idea our creators have ever had, each captivating design our designers ever crafted, each ‘perfect code’ our developers ever wrote, and each exceptional result they’ve all ever driven out. There’s more to us than just the name. We are bound together by our desire to achieve the extraordinary. Each person brings something different to the table, creativity, strategy, experience, and logic. In the end, what has become of us is a team of innovators, a powerhouse ready to charge up the business world."
        secondParagraph="Bringing in a fresh perspective, our team of experts has just recently come together under the umbrella of Media Dynox. We’ve got it all, the innovative streak that keeps us going and the strategic approach to save us from taking the wrong paths. You know what it gives us? Or give it to you? A panache of a business."
        thirdParagraph="For us, it’s not marketing, or let’s say not JUST marketing, it’s art."
      ></Section2>
      <p className="sm:px-24  px-8 ">
        But wait, there's a catch, our artworks aren’t subjective, they’re
        objective. We curate our strategies, digital products, posts, and
        everything you need under great scrutiny. Before it reaches you, our
        work is tested through different parameters and repeatedly iterated in
        order to drive the best possible results. Simply put, your clients will
        love us, since before they even become your clients. And when they love
        us, they’ll adore you more!
      </p>
      <p className="sm:px-24  sm:mt-20 px-8 ">
        Sounds like a far-fetched dream, doesn’t it? Well, our services bridge
        the gap between your dreams and reality. Founded in Gurugram and powered
        by years of experience, we’re all set to make our mark. Come be a part
        of our mission.
      </p>
      <Section5></Section5>
    </div>
  );
}

export default Team
