/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './public/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],

        'overpass-mono': ['Overpass Mono', 'monospace'],

        'overpass-regular': ['Overpass Regular', 'sans-serif'],

        'overpass-semibold': ['Overpass SemiBold', 'sans-serif'],

        'overpass-bold': ['Overpass Bold', 'sans-serif'],

        'overpass-extrabold': ['Overpass ExtraBold', 'sans-serif'],

        'overpass-black': ['Overpass Black', 'sans-serif'],

        'overpass-light': ['Overpass Light', 'sans-serif'],

        'overpass-thin': ['Overpass Thin', 'sans-serif'],
      },
      colors: {
        primary: ' hsl(213, 19%, 18%)',
        'primary-dark': 'hsl(216, 12%, 8%)',
        secondary: 'hsl(217, 12%, 63%)',
        'secondary-medium': 'hsl(216, 12%, 54%)',
        'secondary-medium-1': 'hsl(216, 27%, 22%)',
        orange: 'hsl(25, 97%, 53%)',
      },
    },
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0', transform: 'translateY(10px)', blur: '30px' },
        '100%': { opacity: '1', transform: 'translateY(0)', blur: '0px' },
      },
    },
    animation: {
      'fade-in': 'fade-in 0.5s ease-in-out',
    },
  },
  plugins: [],
}
