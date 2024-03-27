import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const MoveTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="movetop fixed bottom-8 right-8 hidden z-50 sm:block cursor-pointer "
      onClick={scrollToTop}
    >
      <div className="w-16 h-16 bg-red-200 rounded-[50%] flex justify-center items-center hover:bg-mainred transition duration-700  hover:ease-in-out">
        <div className="w-10 h-10 bg-mainred rounded-[50%] flex items-center justify-center">
          <div className="arrow relative flex flex-col items-center justify-center ">
            <div className="text-white rotate-90 absolute top-2 ">
              <ArrowBackIosIcon></ArrowBackIosIcon>
            </div>
            <div className="text-white rotate-90  ">
              <ArrowBackIosIcon></ArrowBackIosIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveTop;
