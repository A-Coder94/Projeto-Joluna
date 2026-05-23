/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D47A1',
          dark: '#002171',
        },
        secondary: '#ffc926',
        text: {
          dark: '#333333',
          light: '#666666',
        },
        bgLight: '#F4F7FA',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        modern: '0 10px 30px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}