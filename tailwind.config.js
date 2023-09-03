/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hybrid': '#FFF6DE',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
         sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

