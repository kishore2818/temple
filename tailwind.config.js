/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        saffron: '#FF9933',
        maroon: '#800000',
        temple: {
          gold: '#FFD700',
          yellow: '#FFCC00',
        }
      },
      fontFamily: {
        'temple': ['Noto Sans', 'sans-serif'],
        'devanagari': ['Noto Sans Devanagari', 'sans-serif'],
      }
    },
  },
  plugins: [],
};