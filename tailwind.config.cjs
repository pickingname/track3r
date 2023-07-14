/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html, css, js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        // add more fonts ...name: [...source-of-font]
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1024px",
          xl: "1024px",
          "2xl": "1024px",
        },
      },
      colors: {
        'badass-black': '#111111',
        'verydark-blue' : '#060b36',
        'verydark-purple' : '#15093b',
        'blue-alt2' : '#161b22',
        'sep-grey' : '#334155',
        'nice-grey' : '#333333',
        'outline-grey' : '#525150',
        'weird-purrple' : '#48006A',
        'weird-blue' : '#000533',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
