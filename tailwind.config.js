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
        'primary': '#0000FF',
        'primary-orange': '#FFD700'
      },
      screens: {
        medium: "800px",
        tablet: "700px",
        mobile: "500px",
        small: "400px",
        xsmall: "340px",
      },
    },
  },
  plugins: [],
};
