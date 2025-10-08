// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },   // Start just outside right
          "100%": { transform: "translateX(-100%)" }, // Move fully left
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite", // Adjust speed here
      },
      fontFamily: {
        serif: ['"Instrument Serif"', "serif"],
        sans: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

/* tailwind.config.js (for Tailwind 3+) */
