/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
        flash: {
          "25%, 40%": { opacity: "0" },
          "50%": { opacity: "1" },
          "75%": { opacity: "0" },
        },
      },

      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        flash: "flash 5s infinite",
      },
    },
    fontFamily: {
      sans: ["sans-serif", "Helvetica", "Arial"],
    },
  },
  plugins: [],
};
