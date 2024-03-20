import { TypeAnimation } from "react-type-animation";

export const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Marketing ",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Technology ",
        1000,
        "Business ",
        1000,
        "Design ",
        1000,
      ]}
      wrapper="span"
      speed={30}
    //   style={{ fontSize:"48px" , display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
