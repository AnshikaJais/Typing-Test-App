/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js, jsx, ts, tsx}",
    "./src/components/ui/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      screens:{
        "lg": "1300px",
        "md": "1024px",
        "md2": "800px",
        "xs": "641px",
        "xxs": "300px"
      },
      colors: {
        "primary": "#660066",
        "secondary": "#4d0066",
        "currentChar": "#ff33ff",
        "rightChar": "#cc00cc",
        "wrongChar": "#ff0000"
      },
      borderColor:{
        "primary": "#660066"
      },
      gridTemplateColumns:{
        "customGrid": "2fr 1fr"
      },
      boxShadow:{
        "bottom-md": '0 10px 10px -15px rgba(0, 0, 0, 0.25)',
        "inside-border": "inset 0 0 0 2px rgba(143, 0, 179, 0.15)"
      }
    },
  },
  plugins: [],
}