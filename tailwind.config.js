/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
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
        "green-pattern": "url('images/background.png')",
      },
      colors: {
        "green-dark": "#094F40",
        "green-dark-secondary": "#0C6C59",
        "green-light": "#5BA28F",
        orange: "#FFA07A",
        "orange-dark": "#FF7F50",
        white: "#E5E5E5",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
