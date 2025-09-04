/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#00c9a7',
        primary: '#e6f7ff',
        danger: '#dc3545',
        background: '#0a192f',
        'background-light': '#1a2332',
      }
    }
  },
  plugins: [],
};
