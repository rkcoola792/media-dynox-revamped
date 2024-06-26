import React, { useRef, useState } from "react";
import "./ContactUs.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Section1 } from "../Pages/Marketing/Section1";
const Contact = () => {
  const notifySuccess = (message) => toast.success(message);
  const notifyFailed = (message) => toast.error(message);
  const ref = useRef();
  const formRef = useRef();
  const userName = useRef("");
  const userEmail = useRef("");
  const userMessage = useRef("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const isInView = useInView(ref, { margin: "-100px" });
  const variants = {
    initial: {
      y: 300,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7exkrb3",
        "template_tjatnme",
        formRef.current,
        "OVqaXbfTDwrp5XzKf"
      )
      .then(
        (result) => {
          setSuccess(true);
          notifySuccess("Email sent succesfully!");
        },
        (error) => {
          setError(true);
          notifyFailed("Somthing wrong !");
        }
      );
  };

  return (
    <div className="contac-us">
      <Section1
        heading="Reach"
        subheading="Us"
        first="Home"
        second="Contact Us"
        third="Reach Us"
      ></Section1>
      <motion.div
        ref={ref}
        className="contact  "
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="textContainer  " variants={variants}>
          <h1 className="">Let's Create Experiences</h1>
          <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>info@mediadynox.com</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Address</h2>
            <span>
              267, First Floor, Phase IV, <br></br>Udyog Vihar, Sector 18,
              Gurugram, Haryana 122015
            </span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Phone</h2>
            <span>+91 -92979 39393</span>
          </motion.div>
        </motion.div>

        <div className="formContainer">
          <motion.div
            className="svg"
            initial={{ opacity: 1 }}
            whileInView={{
              opacity: 0,
              transition: {
                delay: 2,
                duration: 1,
              },
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={isInView && { pathLength: 1, scale: 1.2 }}
                  transition={{ duration: 1 }}
                  d="M5.13641 12.764L8.15456 9.08664C8.46255 8.69065 8.61655 8.49264 8.69726 8.27058C8.76867 8.07409 8.79821 7.86484 8.784 7.65625C8.76793 7.42053 8.67477 7.18763 8.48846 6.72184L7.77776 4.9451C7.50204 4.25579 7.36417 3.91113 7.12635 3.68522C6.91678 3.48615 6.65417 3.35188 6.37009 3.29854C6.0477 3.238 5.68758 3.32804 4.96733 3.5081L3 4C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.8274 19.1733M12.9997 7C13.9765 7.19057 14.8741 7.66826 15.5778 8.37194C16.2815 9.07561 16.7592 9.97326 16.9497 10.95M12.9997 3C15.029 3.22544 16.9213 4.13417 18.366 5.57701C19.8106 7.01984 20.7217 8.91101 20.9497 10.94"
                  stroke="#ff002e"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></motion.path>{" "}
              </g>
            </svg>
          </motion.div>
          <motion.div
            className="form"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 2,
                duration: 1,
              },
            }}
          >
            <form action="" ref={formRef} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                ref={userName}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                ref={userEmail}
              />

              <textarea
                ref={userMessage}
                className="text-message h-32 "
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                required
              ></textarea>
              <button>Submit</button>
              <div className="message">
                <ToastContainer />
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
