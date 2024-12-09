/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "hsl(207, 95%, 8%)",
        white: "hsl(100, 100%, 99%)",
        lightBlue: "hsl(190, 76%, 82%)",
        skyBlue: "hsl(190, 74%, 59%)",
        blueGreen: "hsl(195, 100%, 39%)",
        marianBlue: " hsl(214, 97%, 27%)",
      },
      fontFamily: {
        merriweather: ["Merriweather", "Arial"],
        roboto: ["Roboto", "Arial"],
      },
      animation: {
        "fade-in": "fadeIn 2s ease both",
        "slide-down": "slideDown 2s ease-out",
        "slide-right": "slideRight 2s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)", opacity: "0%"},
          "100%": { transform: "translateX(0)", opacity: "1" },
        }
      },
    },
  },
  plugins: [],
};
