/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    fontFamily: {
      primary: 'Almarai, sans-serif',
      secondary: 'Source Code Pro, monospace',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        body: '#010208',
        white: '#fff',
        pink: 'pink',
        transparent: 'transparent',
      },
      colors: {
        buttonColor: '#FF8413',
        primary: '#00B860',
        secondary: '#FF8413',
        dimWhite: '#00000080',
        navBg: '#B0FFDBB2',
        sectionBg: '#f2f2f2',
      },
    },
  },
  plugins: [],
};
