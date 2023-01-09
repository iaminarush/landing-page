/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      "6xl": [
        "3.75rem",
        {
          lineHeight: "4.5rem",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
