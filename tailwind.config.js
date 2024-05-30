/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
  
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "cc-",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      width: {
        65: "65%",
        35: "35%",
        50: "50%"
      },
      spacing: {
        65: "65%",
        35: "35%"
      },
      colors: {
        'cc-blue': '#6ac1fc',
      },
      fontFamily: {
        'heading': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'body': ['Avenir Next Rounded Std', ...defaultTheme.fontFamily.sans],
        'h6': ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}