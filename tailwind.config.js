/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      backdropFilter: {
        'blur-5': 'blur(5px)', 
      },
    },
  },
  plugins: [
   
    function ({ addUtilities }) {
      const newUtilities = {
        '.webkit-backdrop-blur-5': {
          '-webkit-backdrop-filter': 'blur(5px)', 
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};