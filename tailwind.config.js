/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      spacing: {
        big: "48rem",
      },
    },
    fontFamily: {
      "jet-brains": ["JetBrains Mono", "monospace"],
    },
  },
  plugins: [],
};
