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
        'custom-lg': '0px 20px 40px #0000001F',
        'custom-smooth': '1px 10px 30px #0000000F',
      },
      colors: {
        'main-tx-color': '#333333',
        'secondary-tx-color': '#362E29',
        'custom-green': '#23B21F',
        'custom-brown': '#B08F6D',
        'custom-light-gold': '#FEFAF2',
        'custom-gold': '#FFF9F0',
        'custom-white': '#FFFFFF48',
        'custom-gray': '#AAAAAA',
      },
    },
  },
  plugins: [],
};
