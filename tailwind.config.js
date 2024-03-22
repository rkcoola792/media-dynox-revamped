/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainred: "#ff002e",
        secondaryRed: "#ff4242",
      },
      fontFamily: {
        outfit: ["Outfit"],
      },
      boxShadow: {
        // "blog-shadow": " 0px 0px 21px -7px rgba(0,0,0,0.75)",
        "blog-shadow": "  0px 0px 30px 0px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
