/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'pt-sans-regular': ['PTSansCaption-Regular', 'sans-serif'],
        'pt-sans-bold': ['PTSansCaption-Bold', 'sans-serif'],
        chicle: ['Chicle', 'sans-serif'],
      },
      boxShadow: {
        'custom-sm': '0px 3px 6px #00000012',
        'custom-md': '0px 10px 20px #00000017',
        'custom-lg': '0px 20px 40px #0000001F',
        'custom-card': '0px 10px 20px #0000000F',
        'custom-smooth': '1px 10px 30px #0000000F',
        'custom-inner': 'inset 0 0 4px 2px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'main-tx-color': '#333333',
        'secondary-tx-color': '#362E29',
        'custom-green': '#23B21F',
        'custom-brown': '#B08F6D',
        'custom-light-gold': '#FEFAF2',
        'custom-gold': '#FFF9F0',
        'custom-white': '#FFFFFF48',
        'custom-light-gray': '#B9B9B9',
        'custom-gray': '#AAAAAA',
      },
      keyframes: {
        moveDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        moveDown: 'moveDown 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
