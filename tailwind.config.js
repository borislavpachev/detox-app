/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'pt-sans-regular': ['pt-sans-caption-regular', 'sans-serif'],
        'pt-sans-bold': ['pt-sans-caption-bold', 'sans-serif'],
        chicle: ['Chicle', 'sans-serif'],
      },
      boxShadow: {
        'custom-sm': '0px 3px 6px #00000012',
        'custom-md': '0px 10px 20px #00000017',
      },
      colors: {
        'main-tx-color': '#333333',
        'secondary-tx-color': '#362E29',
        'custom-green': '#23B21F',
      },
    },
  },
  plugins: [],
};
