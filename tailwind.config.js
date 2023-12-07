/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-1': '#2D9CDB',
        'blue-2': '#2F80ED',
        'dark-1': '#2F2F2F',
        'red-1': '#FF5E5E',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],  
        'gabarito': ['Gabarito', 'serif'],  
      },
      boxShadow: {
        'custom-light': '0 4px 16px 2px rgba(0, 0, 0, .25)',
        'custom-bottom': '0 15px 14px 1px rgba(0, 0, 0, .25)',
      },
    },
  },
  plugins: [],
}