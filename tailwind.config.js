/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)'},
          '50%': { transform: 'perspective(1000px) rotateY(180deg)'},
          '100%': { transform: 'perspective(1000px) rotateY(360deg)'}
        }
      },
      animation: {
        rotate: 'rotate 60s linear infinite',
      },
      backgroundImage: {
        "bg-book":
          "url('/Users/ishnoorsinghsethi/Desktop/ArtisticWeb/Willow-Homes/src/assets/one.jpg')",
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        yeseva: ["Yeseva One", "cursive"],
        arimo: ["Arimo", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        notoSerif: ["Noto Serif", "serif"],
        timesRoman : ["Times New Roman", "Times"],
        roboto: ["Roboto Condensed", "sans-serif"],
        montserrat:["Montserrat", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "769px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px"
    },
  },
  plugins: [('tailwind-scrollbar-hide')
  ],
};