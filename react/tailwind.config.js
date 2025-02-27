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
        light: '#F9FAFB',
        sidebar: '#f8f8f8',
        'text-dark': '#333333',
        'text-medium': '#666666',
        'border-light': '#e5e7eb',
        'hover-blue': '#f0f7ff',
        'table-header': '#f9fafb'
      }
    }
  },
  plugins: [],
}
