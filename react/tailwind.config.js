/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/devin-test-react/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a3f',
        secondary: '#4353FF',
        success: '#10B981',
        danger: '#EF4444',
        light: '#F9FAFB'
      }
    }
  },
  plugins: [],
}
