/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        customblue: "#383B71",
        customnav: "#625EF0",
      },
    },
  },
  plugins: [],
};
