/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        italiana: ["Italiana", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

