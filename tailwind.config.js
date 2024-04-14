/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "200px",
      midSm: "370px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      // serif: ["Merriweather", "serif"],
    },
    fontSize: {
      micro: "0.563rem",
      tiny: "0.625rem",
      xs: "0.75rem",
      midSm: "0.813rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.375rem",
      "3xl": "1.688rem",
      "3.5xl": "1.75rem",
      "4xl": "1.875rem",
      "5xl": "2.813rem",
      "6xl": "3.5rem",
    },
    extend: {
      animation: {
        pulse: "pulse 3s linear infinite",
      },
    },
  },
};
