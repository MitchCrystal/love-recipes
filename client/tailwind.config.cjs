/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  // prefix: 'tw-',
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    utils: true,
    logs: true,
  },
};
