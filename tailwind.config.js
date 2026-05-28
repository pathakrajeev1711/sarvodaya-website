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
          600: "#23824b",
          700: "#1a653b",
          800: "#14532D",
          900: "#123d29"
        },
        cream: "#F8F5EE",
        charcoal: "#1F2933",
        river: {
          50: "#edf7fb",
          600: "#177ca3",
          700: "#126180"
        },
        marigold: {
          100: "#fff1c7",
          400: "#f5b942",
          500: "#B68D40",
          600: "#b97808"
        }
      },
      boxShadow: {
        soft: "0 18px 48px rgba(18, 61, 41, 0.10)"
      }
    }
  },
  plugins: []
};
