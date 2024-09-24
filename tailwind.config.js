/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "green-pattern": "url(./src/assets/images/background.png)",
      },
      colors: {
        "green-dark": "#094F40",
        "green-dark-secondary": "#0C6C59",
        "green-light": "5BA28F",
        orange: "#FF7F50",
        white: "#E5E5E5",
      },
    },
  },
  plugins: [],
};
