/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#eef8f1",
          100: "#d7f0de",
          200: "#EAF5EC",
          600: "#36B5C7",
          700: "#283593",
          800: "#283593",
          900: "#1E293B"
        },
        cream: "#F8F5EE",
        charcoal: "#1F2933",
        river: {
          50: "#EAF8FB",
          600: "#36B5C7",
          700: "#283593"
        },
        marigold: {
          100: "#F1F8E9",
          400: "#8BC34A",
          500: "#8BC34A",
          600: "#689F38"
        }
      },
      boxShadow: {
        soft: "0 18px 48px rgba(40, 53, 147, 0.14)"
      }
    }
  },
  plugins: []
};
