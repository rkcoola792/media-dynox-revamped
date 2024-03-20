import React from 'react'
import Diversity1Icon from "@mui/icons-material/Diversity1";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import HailIcon from "@mui/icons-material/Hail";
import SectionFiveElement from './SectionFiveElement';
import { motion } from 'framer-motion';

const Section5 = () => {
    const services = [
      {
        title: "Support Brand value",
        subheading:
          "Following the quality of our service thus having gained trust of our many clients.",
        icon: (
          <Diversity1Icon style={{ width: 40, height: 40 }}></Diversity1Icon>
        ),
      },
      {
        title: "Boost user relationship",
        subheading:
          "Following the quality of our service thus having gained trust of our many clients.",
        icon: <HailIcon style={{ width: 40, height: 40 }}></HailIcon>,
      },
      {
        title: "Drive more traffic",
        subheading:
          "Following the quality of our service thus having gained trust of our many clients.",
        icon: (
          <SignalCellularAltIcon
            style={{ width: 40, height: 40 }}
          ></SignalCellularAltIcon>
        ),
      },
      {
        title: "Stay on top",
        subheading:
          "Following the quality of our service thus having gained trust of our many clients.",
        icon: <HandshakeIcon style={{ width: 40, height: 40 }}></HandshakeIcon>,
      },
      {
        title: "Increase in competition",
        subheading:
          "Following the quality of our service thus having gained trust of our many clients.",
        icon: (
          <LaptopChromebookIcon
            style={{ width: 40, height: 40 }}
          ></LaptopChromebookIcon>
        ),
      },
      {
        title: "Improve conversion rate",
        subheading:
          "Following the quality of our service thus having gained trust of our many clients.",
        icon: <AdsClickIcon style={{ width: 40, height: 40 }}></AdsClickIcon>,
      },
    ];
  return (
    <div className="section-5 bg-slate-100 sm:px-24 mt-20 sm:py-24 py-12 px-8">
      <div className="heading  flex flex-col gap-12">
        <motion.h1
          className="font-light sm:text-4xl text-3xl"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="font-semibold">Why does your business need</span>{" "}
          marketing services ?
        </motion.h1>
      </div>

      <div className="description ">
        <div className="description mt-16 flex flex-col gap-10 leading-7">
          <motion.p
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into
          </motion.p>
        </div>
      </div>
      <div className="services flex flex-wrap justify-between mt-8">
        {services.map((ele,index) => (
          <SectionFiveElement
          key={index}
            title={ele.title}
            subheading={ele.subheading}
            icon={ele.icon}
          ></SectionFiveElement>
        ))}
      </div>
    </div>
  );
}

export default Section5
