import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
// import "./pogressbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "../Dropdown/Dropdown";
import MobileHeaderForCompany from "../MobileHeaderDropdown/MobileHeaderForCompany";
import MobileHeaderDropdown from "../MobileHeaderDropdown/MobileHeaderDropdown";
const Header = () => {
  const [openServices, setOpenServices] = useState(true);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [reference, setReference] = useState("");
  const [mobileHeader, setMobileHeader] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  function updateProgressBar() {
    const { scrollTop, scrollHeight } = document.documentElement;
    const scrollPercent =
      (scrollTop / (scrollHeight - window.innerHeight)) * 100 + "%";
    document
      .querySelector("#progress-bar")
      .style.setProperty("--progress", scrollPercent);
  }

  document.addEventListener("scroll", updateProgressBar);
  return (
    <>
      <div id="progress-bar" className="progress-bar " style={{ scaleX }}></div>

      {mobileHeader && (
        <motion.div
          className="mobile-header fixed md:hidden  z-[100] bg-gray-100 w-[70%] h-svh sm:w-[50%] shadow-lg transition duration-200 ease-linear hover:ease-linear"
          initial={{ x: -30, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="right-header-elements  flex flex-col gap-6 p-8 items-left text-2xl">
            <Link to="/">
              <h1 className="lg:text-lg hover:text-mainred cursor-pointer font-semibold ">
                Home
              </h1>
            </Link>

           <MobileHeaderForCompany/>
           <MobileHeaderDropdown/>
            <h1 className="lg:text-lg  hover:text-mainred cursor-pointer font-semibold transition duration-450 ease-out hover:ease-in">
              Blogs
            </h1>
            <Link to="/contact">
              <h1 className="lg:text-lg  hover:text-mainred transition duration-450 ease-out hover:ease-in cursor-pointer font-semibold">
                Reach Us
              </h1>
            </Link>
          </div>
        </motion.div>
      )}

      <div className="header flex justify-between  py-8 items-center sticky top-0 bg-slate-50 z-50 lg:px-24 px-8 sm:px-12">
        <div className="left logo font-bold sm:text-xl lg:text-3xl cursor-pointer">
          Media Dynox 
          <span className="text-mainred font-bold text-2xl lg:text-3xl ">
            .
          </span>
        </div>
        <div
          className="hamburger lg:hidden"
          onClick={() => setMobileHeader((prev) => !prev)}
        >
          <MenuIcon></MenuIcon>
        </div>
        <div className="right-header-elements hidden lg:flex gap-16 items-center sm:">
          <Link to="/">
            <h1 className="lg:text-lg hover:text-mainred cursor-pointer font-semibold transition duration-450 ease-out hover:ease-in">
              Home
            </h1>
          </Link>
          <div
            className="company flex items-center"
            id="Company"
            onMouseEnter={(e) => {
              setReference(e?.target?.id);
              setServiceDropdown(true);
            }}
            onMouseLeave={() => setServiceDropdown(false)}
          >
            <span
              className="lg:text-lg cursor-pointer  transition duration-450 ease-out hover:ease-in hover:text-mainred font-semibold"
              id="Company"
            >
              Company
            </span>
            &nbsp;
            <span
              className="cursor-pointer text-mainred font-extrabold mb-1 "
              id="Company"
            >
              .
            </span>
          </div>
          <div
            className="services transition duration-450 ease-out hover:ease-in flex items-center lg:text-lg font-semibold  hover:text-mainred cursor-pointer"
            id="Service"
            onMouseEnter={(e) => {
              setReference(e?.target?.id);
              setServiceDropdown(true);
            }}
            onMouseLeave={() => setServiceDropdown(false)}
          >
            <h1 className="" id="Service">
              Services
            </h1>
            &nbsp;
            <span className="text-mainred font-extrabold mb-1 " id="Service">
              {openServices ? "." : "."}
            </span>
          </div>
          <Link to="/blogs">
            <h1 className="lg:text-lg  hover:text-mainred cursor-pointer font-semibold transition duration-450 ease-out hover:ease-in">
              Blogs
            </h1>
          </Link> 
          <Link to="/contact">
            <h1 className="lg:text-lg  hover:text-mainred transition duration-450 ease-out hover:ease-in cursor-pointer font-semibold">
              Reach Us
            </h1>
          </Link>
        </div>
        <div
          className="absolute z-20 bg-slate-50 right-72 top-[65px]"
          onMouseEnter={() => setServiceDropdown(true)}
          onMouseLeave={() => setServiceDropdown(false)}
        >
          {serviceDropdown && <Dropdown reference={reference}></Dropdown>}
        </div>
      </div>
    </>
  );
};

export default Header;
