/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#1a1a1a',
        'background': '#faf5f5',
        'primary': '#742706',
        'secondary': '#364409',
        'accent': '#e78383',
       },
    },
  },
  plugins: [],
}

