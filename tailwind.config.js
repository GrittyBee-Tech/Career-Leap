/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "cursive"],
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
        "georgia": ['Georgia', 'Times New Roman']
      },
      colors: {
        'primary': '#0000FF'
      }
    },
  },
  plugins: [],
};
