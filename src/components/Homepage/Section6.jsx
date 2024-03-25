import React, { useRef } from "react";
import "./Section6.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Media Dynox",
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `Engage visitors with our dynamic React and Framer Motion powered landing page. Experience smooth animations, captivating visuals, and seamless navigation. Explore our innovative features, crafted for your needs. Join us on a journey of innovation and creativity.`,
    link: "https://media-dynox-ajij-eosin.vercel.app/",
  },
  {
    id: 2,
    title: "Netflix-GPT",
    img: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Netflix like app which uses OPEN AI APIs to suggest movies.The project uses React, tailwind CSS, Firebase APIs and Redux Toolkit.It is a fully mobile responsive and multilingual application.Implements authentication feature as well ",
    link: "https://netflix-gpt-delta-topaz.vercel.app/",
  },
  {
    id: 3,
    title: "Youtube",
    img: "https://images.pexels.com/photos/3227986/pexels-photo-3227986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Developed a highly scalable and fast video streaming platform inspired from youtube.The project used React, tailwind CSS,  and Redux Toolkit. Optimised search feature with debouncing and live chat feature.",
    link: "https://namaste-youtube-99ta.vercel.app/",
  },
  {
    id: 4,
    title: "Chat App",
    img: "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "It is a real time chat application made using React and vanilla css with the help of firebase APIs for different features like authentication (JWT), storing chats data, user info and more.",
    link: "https://chat-app-d0f9e.firebaseapp.com",
  },
  {
    id: 5,
    title: "Ecommerce App",
    img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: `A fullstack ecommerce website (Meevea Store) which uses MERN (mongoDb,Express,React,NodeJs) redux-toolkit, tailwind, MUI and Stripe for payment gateway.  Project in Progress`,
    link: "https://github.com/rkcoola792/Ecommerce-Meveea-Store-",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-825, 600]);

  return (
    <section>
      <motion.div
        id="Portfolio"
        className="container pb-12"
        initial={{ y: 75, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="wrapper">
          <div className="image" ref={ref}>
            <img src={item.img} alt="" className="" />
          </div>
          <div className="textContainer" style={{ y }}>
            <h2 className="hover:text-orange-400 cursor-pointer">
              {item.title}
            </h2>
            <p className="">{item.desc}</p>
            <a href={item.link}>
              <button>See Demo </button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "0 0"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: "100",
    damping: "30",
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1 className="text-3xl sm:text-5xl">Featured Works</h1>
        <motion.div className="progressBar " style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id}></Single>
      ))}
    </div>
  );
};

export default Portfolio;
