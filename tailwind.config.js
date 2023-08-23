/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
  plugins: [require('daisyui')],
};
