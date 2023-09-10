/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        cyred: '#800000',
      },
    },
  },
  daisyui: {
    themes: ['light', 'black', 'night', 'forest', 'retro', 'acid', 'dark'],
  },
  darkMode: 'class',
  plugins: [require('daisyui'), nextui()],
};
