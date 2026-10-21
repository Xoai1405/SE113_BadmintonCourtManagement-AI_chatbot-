/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Dòng này bảo Tailwind hãy quét đuôi .jsx
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}