/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'serif'], 
      },
      backdropFilter: {
        'blur-3': 'blur(3px)', 
      },
    },
  },
  plugins: [
   
    function ({ addUtilities }) {
      const newUtilities = {
        '.webkit-backdrop-blur-3': {
          '-webkit-backdrop-filter': 'blur(3px)', 
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};