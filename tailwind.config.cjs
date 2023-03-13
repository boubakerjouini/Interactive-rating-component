/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],

        "overpass-mono": ["Overpass Mono", "monospace"],

        "overpass-regular": ["Overpass Regular", "sans-serif"],

        "overpass-semibold": ["Overpass SemiBold", "sans-serif"],

        "overpass-bold": ["Overpass Bold", "sans-serif"],
      },
      colors: {
        primary: " hsl(213, 19%, 18%)",
        "primary-dark": "hsl(216, 12%, 8%)",
        secondary: "hsl(217, 12%, 63%)",
        "secondary-medium": "hsl(216, 12%, 54%)",
        "secondary-medium-1": "hsl(216, 27%, 22%)",
        orange: "hsl(25, 97%, 53%)",
      },
    },
  },
  plugins: [],
};
