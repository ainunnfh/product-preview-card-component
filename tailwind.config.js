/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "system-ui", "Arial", "sans-serif"],
        fraunces: ["fraunces", "system-ui", "Arial", "sans-serif"],
        serif: ["Serif", "system-ui", "Arial", "fraunces"],
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [],
};
