/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      }
    },
    fontFamily: {
      "jet-brains": ['JetBrains Mono', 'monospace']
    },
  },
  plugins: [],
}

