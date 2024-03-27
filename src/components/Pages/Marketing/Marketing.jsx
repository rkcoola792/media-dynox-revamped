import React from 'react'
import { Section1 } from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

import Section7 from './Section7'
import Section10 from './Section9'
import Section8 from '../../Homepage/Section8'
import {motion} from "framer-motion"
import MoveTop from '../../Movetop/Movetop'
import Section9 from '../../Homepage/Section9'

const Marketing = () => {
const marketingContent=[
  {
    name:"section1",
     heading:"Marketing",
        subheading:"that we offer",
        first:"Home",
        second:"Our Services",
        third:"Marketing",
},
{
  name:"section2",
   heading:"What is",
          subheading:"Marketing ?",
          firstParagraph:"Brand purpose is the practice of increasing the quantity and quality of traffic to your website through organic search engine results",
          secondParagraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into",
          thirdParagraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"
},
{
   first:"Social Media",
          second:"Paid Media",
          third:"Digital Marketing",
          fourth:"SEO"

}
]

  return (
    <div>
      <Section1
        heading={marketingContent[0]?.heading}
        subheading={marketingContent[0]?.subheading}
        first={marketingContent[0]?.first}
        second={marketingContent[0]?.second}
        third={marketingContent[0]?.third}
      ></Section1>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section2
          heading={marketingContent[1]?.heading}
          subeading={marketingContent[1]?.subheading}
          firstParagraph={marketingContent[1]?.firstParagraph}
          SecondParagraph={marketingContent[1]?.secondParagraph}
          ThirdParagraph={marketingContent[1]?.thirdParagraph}
        ></Section2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section3
          first={marketingContent[2]?.first}
          second={marketingContent[2]?.second}
          third={marketingContent[2]?.third}
          fourth={marketingContent[2]?.fourth}
        ></Section3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section4
          heading="How Marketing"
          subheading="Works Step by Step flow"
          paragraph="Announce your brand to the right people, at the right time with innovative strategies that are built for your business and you. Announce your brand to the right people, at the right time with innovative strategies that are built for your business and you"
        ></Section4>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section5></Section5>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section6></Section6>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section9 heading="Your Growth," subheading="Our way"></Section9>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section7></Section7>
      </motion.div>
      <MoveTop></MoveTop>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div className="bg-slate-100 p-2 lg:p-0 mt-12 lg:mt-0">
          <Section8></Section8>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section10></Section10>
      </motion.div>
    </div>
  );
}

export default Marketing
