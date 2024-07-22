/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        white: "2px 2px 2px rgba(255, 255, 255, 0.8)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-white": {
          textShadow: "2px 2px 2px rgba(255, 255, 255, 0.8)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
