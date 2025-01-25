/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          light: "#8B5CF6", // Purple
          DEFAULT: "#7C3AED",
          dark: "#6D28D9",
        },
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
