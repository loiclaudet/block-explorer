/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        "dark-100": "var(--color-dark-100)",
        "white-cream-100": "var(--color-white-cream-100)",
        "pink-100": "var(--color-pink-100)",
        "pink-200": "var(--color-pink-200)",
        "purple-100": "var(--color-purple-100)",
        "purple-200": "var(--color-purple-200)",
        "night-100": "var(--color-night-100)",
        "night-200": "var(--color-night-200)",
        "sky-100": "var(--color-sky-100)",
        "sky-200": "var(--color-sky-200)",
        "mint-100": "var(--color-mint-100)",
        "mint-200": "var(--color-mint-200)",
        "sun-100": "var(--color-sun-100)",
        "sun-200": "var(--color-sun-200)",
        "warning-100": "var(--color-warning-100)",
        "warning-200": "var(--color-warning-200)",
        "danger-100": "var(--color-danger-100)",
        "danger-200": "var(--color-danger-200)",
      },
    },
  },
  plugins: [],
};
