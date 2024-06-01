/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'change-border-color': 'changeBorderColor 5s infinite alternate',
      },
      keyframes: {
        changeBorderColor: {
          '0%': { borderColor: '#fde68a' },
          '25%': { borderColor: '#a7f3d0' },
          '50%': { borderColor: '#60a5fa' },
          '75%': { borderColor: '#7c3aed' },
          '100%': { borderColor: '#fbbf24' },
        },
      },
    },
  },
  plugins: [],
};
