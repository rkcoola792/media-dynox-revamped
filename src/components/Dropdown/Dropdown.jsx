import React from "react";

import { Link } from "react-router-dom";
export const Item = ({ title, subheading, img, color }) => {
  return (
    <div className="item flex gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
      <div className="image">
        <div
          className={`w-12 h-12 rounded-[50%] flex ${color} justify-center items-center`}
        >
          <img src={img} alt="" className="w-8 h-8 " />
        </div>
      </div>
      <div className="texts">
          <div className="heading font-semibold">{title}</div>
          <div className="subheading text-sm">{subheading}</div>
      </div>
    </div>
  );
};

const Dropdown = ({ reference }) => {
  console.log("referece recicev", reference);

  return (
    <div className="dropdown w-[380px] p-4 shadow-lg flex flex-col gap-4  px-6 rounded-md transition duration-450 ease-out hover:ease-in py-8 ">
      <Link to={`${reference == "Service" ? "/marketing" : "/about-us"}`}>
        <Item
          subheading={
            reference == "Service"
              ? "Learn how to sign up, install and use our products."
              : "We are the face to be reckoned with"
          }
          title={reference == "Service" ? "Marketing" : "About Us"}
          img={reference == "Service" ? "/marketing.webp" : "/office.webp"}
          color="bg-red-100"
        ></Item>
      </Link>
      <Link to={`${reference == "Service" ? "/technology" : "/team"}`}>
        <Item
          subheading={
            reference == "Service"
              ? "Learn, share and connect with other users."
              : "The brain behind the brilliance "
          }
          title={reference == "Service" ? "Technology" : "Team"}
          img={reference == "Service" ? "/technology.webp" : "/team.webp"}
          color="bg-blue-100"
        ></Item>
      </Link>
      <Link to={`${reference == "Service" ? "/business" : "/work"}`}>
        <Item
          subheading={
            reference == "Service"
              ? "Learn how to sign up, install and use our products."
              : "Fueling innovation, one step at a time"
          }
          title={reference == "Service" ? "Business" : "Work"}
          img={reference == "Service" ? "/business.webp" : "work.webp"}
          color="bg-green-100"
        ></Item>
      </Link>
      <Link to={`${reference == "Service" ? "/design" : "/career"}`}>
        <Item
          subheading={
            reference == "Service"
              ? "Learn, share and connect with other users."
              : "Come be a part of our team!"
          }
          title={reference == "Service" ? "Design" : "Career"}
          img={reference == "Service" ? "/design.webp" : "/team.webp"}
          color="bg-orange-100"
        ></Item>
      </Link>
    </div>
  );
};

export default Dropdown;
