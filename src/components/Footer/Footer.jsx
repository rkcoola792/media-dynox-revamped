import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
import Explore from "../Explore/Explore";


const Footer = () => {
  return (
    <motion.div
      className="footer mt-32 sm:h-[500px] md:flex w-svw "
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="left bg-[#131111] md:w-[70%] pb-24 mt-2">
        <motion.div
          className="top sm:flex lg:gap-[60px] gap-8  justify-center sm:pt-24  py-1 lg:px-24 sm:px-12 px-8"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>
            <h1 className="lg:text-3xl sm:text-2xl  lg:block font-semibold text-white mt-20 text-4xl">
              MediaDynox<span className="font-bold text-mainred">.</span>
            </h1>
          </div>
          <div className="services flex flex-col my-8 sm:my-0">
            <h1 className="title text-white sm:text-2xl text-3xl mb-6">
              Services
            </h1>
            <div className="services-elemets flex flex-col gap-4 text-white ">
              <h3 className="opacity-60 hover:opacity-100 cursor-pointer transition duration-450 ease-out hover:ease-in text-xl sm:text-base">
                Design
              </h3>
              <h3 className="opacity-60 hover:opacity-100 cursor-pointer transition duration-450 ease-out hover:ease-in  text-xl sm:text-base">
                Technology
              </h3>
              <h3 className="opacity-60 hover:opacity-100 cursor-pointer transition duration-450 ease-out hover:ease-in  text-xl sm:text-base">
                Business
              </h3>
              <h3 className="opacity-60 hover:opacity-100 transition duration-450 ease-out hover:ease-in cursor-pointer  text-xl sm:text-base">
                Marketing
              </h3>
            </div>
          </div>
          <div className="contact-div flex flex-col w-[250px]">
            <h1 className="text-white sm:text-2xl text-3xl mb-6">Contact</h1>
            <div className="contact-elements flex flex-col sm: gap-2">
              <div className="address flex gap-2 ">
                <div className="text-mainred opacity-70 hidden sm:block">
                  <LocationOnIcon></LocationOnIcon>
                </div>
                <p className=" text-white opacity-60 hover:opacity-100 transition duration-450 ease-out hover:ease-in text-lg sm:text-base">
                  267, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
                  122015
                </p>
              </div>

              <div className="phone flex gap-2">
                <div className="text-mainred opacity-70 hidden sm:block ">
                  <LocalPhoneIcon></LocalPhoneIcon>
                </div>
                <p className=" text-white opacity-60 hover:opacity-100 transition duration-450 ease-out hover:ease-in sm:text-base">
                  +91 92979 39393
                </p>
              </div>

              <div className="email flex gap-2">
                <div className="text-mainred opacity-70 hidden sm:block">
                  <EmailIcon></EmailIcon>
                </div>
                <p className=" text-white opacity-60 hover:opacity-100 transition duration-450 ease-out hover:ease-in ">
                  info@mediadynox.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bottom lg:px-24 sm:pl-24 px-8 "
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="upper sm:flex-row flex flex-col gap-2 mt-20 sm:items-center">
            <div className=" sm:text-sm text-white opacity-60 hover:opacity-90 cursor-pointer transition duration-450 ease-out hover:ease-in text-lg">
              Privacy Policy{" "}
            </div>
            <div className="text-sm text-white opacity-60 hidden sm:block ">
              |
            </div>
            <div className="sm:text-sm text-lg text-white opacity-60 hover:opacity-90 cursor-pointer transition duration-450 ease-out hover:ease-in ">
              Terms and conditions{" "}
            </div>
            <div className="text-sm text-white opacity-60 hidden sm:block">
              |
            </div>
            <div className=" sm:text-sm text-lg text-white opacity-60 hover:opacity-90 cursor-pointer transition duration-450 ease-out hover:ease-in ">
              Privacy Shield Policy
            </div>
          </div>
          <div className="lower sm:mt-4 mt-8">
            <p className="sm:text-sm text-lg text-white opacity-60 ">
              Copyright@2024 Mediadynox.com. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="right md:w-[35%] bg-slate-100 flex flex-col lg:pl-10 sm:pl-10 sm:pt-24 pt-12 pl-8 py-12 sm:mt-2 ">
        <motion.div
          className="top flex flex-col gap-2 "
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="title">
            <h1 className="xl:text-4xl md:text-3xl font-medium text-3xl">
              Get In Touch
            </h1>
          </div>
          <div className="hr border border-b-black mt-1  w-[70%]">
            <hr />
          </div>
          <div className="ctas lg:flex flex-wrap sm:-translate-x-3 -translate-x-4">
            <div className="md:scale-90 scale-125 px-12 sm:px-20 md:px-0 mt-0 p">
              <Explore text="Contact Us" size="sm"></Explore>
            </div>
            <div className="mt-0 md:scale-90 scale-125 px-12 lg:-translate-x-[2px]  sm:px-20 md:px-0">
              <Explore text="Schedule a meeting" size="sm"></Explore>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mid"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-gray-700 lg:text-sm  sm:text-xs sm:leading-6 mt-6 w-[70%] md:w-[80%] lg:w-[90%] xl:w-[80%] lg:leading-7 leading-7 ">
            Welcome to our digital agency. We specialize in helping business
            most like your succeed online. From website design and development.
          </p>
        </motion.div>
        <motion.div
          className="bottom lg:mt-8 sm:mt-6 mt-6 "
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="sm:text-2xl font-semibold text-3xl">
            Follow Us <span className="text-mainred">.</span>
          </h1>
          <div className="social-icons flex sm:gap-2 -translate-x-1 mt-4 ml-1  gap-5">
            <div className="hover:text-mainred transition duration-450 ease-out hover:ease-in cursor-pointer sm:scale-75 scale-120">
              <XIcon></XIcon>
            </div>
            <div className="hover:text-mainred transition duration-450 ease-out hover:ease-in cursor-pointer sm:scale-90 scale-120">
              <FacebookIcon></FacebookIcon>
            </div>
            <div className="hover:text-mainred transition duration-450 ease-out hover:ease-in cursor-pointer sm:scale-90 scale-120">
              <LinkedInIcon></LinkedInIcon>
            </div>
            <div className="hover:text-mainred transition duration-450 ease-out hover:ease-in cursor-pointer sm:scale-90 scale-120">
              <InstagramIcon></InstagramIcon>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
