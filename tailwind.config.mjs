/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,astro}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-1": {
          "0%": {
            transform: "scale(1, 1)",
            opacity: 0,
          },

          "50%": {
            opacity: 1,
          },

          "100%": {
            transform: "scale(6, 6)",
            opacity: 0,
          },
        },
        "pulse-2": {
          "0%": {
            opacity: 0,
            transform: "scale(0)",
          },

          "30%": {
            opacity: 1,
            transform: "scale(1.5)",
          },

          "60%": {
            opacity: 1,
            transform: "scale(2)",
          },

          "100%": {
            opacity: 0,
            transform: "scale(2)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-1": "pulse-1 1.5s ease-in-out infinite",
        "pulse-2": "pulse-2 1.5s ease-in-out infinite"
      },
      fontFamily: {
        "sans-accent": ["Google Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
