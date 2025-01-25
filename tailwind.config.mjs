/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#7C3AED",
          dark: "#6D28D9",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
