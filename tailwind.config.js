import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],

  theme: {
    fontFamily: {
      body: ["Work Sans"],
    },
    extend: {
      right: {
        '34': '136px',
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};
