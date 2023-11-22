/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#5b9279",
        bgSecondary: "#8fcb9b",
        tPrimary: "#eae6e5",
        tSecondary: "#8f8073",
      },
      fontFamily: {
        heading: "Dancing Script, Roboto",
        display: "Fira Code Variable, Roboto",
      },
    },
  },
  plugins: [],
};
