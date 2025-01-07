import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: [flowbite.content(), "./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    container: {
      center: true,
    },
    fontSize: {
      "fs-1": "2.5rem",
      "fs-6": "6em",
    },
    colors: {
      "custom-teal": "#1abc9c",
    },

    extend: {
      spacing: {
        2.5: "10px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
