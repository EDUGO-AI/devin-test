/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A3F',
        secondary: '#60A5FA',
        success: '#10B981',
        textDark: '#1F2937',
        textMedium: '#6B7280',
        bgLight: '#F9FAFB',
      },
    },
  },
  plugins: [],
}
