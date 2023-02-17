/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["var(--font-raleway)"],
        text: ["var(--font-nunito)"],
        link: ["var(--font-gara)"],
      },
    },
  },
  plugins: [],
};
