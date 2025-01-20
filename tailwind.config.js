/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Inter", "system-ui", "Arial", "sans-serif"],
        // mono: ["JetBrains Mono", "monospace"],
        Montserrat: ["Montserrat", "system-ui", "Arial", "sans-serif"],
        Fraunces: ["Fraunces", "system-ui", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
