/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'prism-pattern': "url('/src/assets/prism.svg')"
      }
    },
  },
  prefix: 'iti-',
  plugins: [],
}

