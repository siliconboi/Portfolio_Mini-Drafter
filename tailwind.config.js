/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#1a1a1a",
          "200": "#040404",
          "300": "rgba(26, 26, 26, 0.4)",
          "400": "rgba(255, 255, 255, 0.8)",
          "500": "rgba(26, 26, 26, 0.8)",
        },
        lightcyan: "#e7fefa",
        mediumaquamarine: "#40c2ab",
        darkslateblue: "#451d58",
        blueviolet: "#9747ff",
        turquoise: "#4ef1d4",
        aquamarine: "#64fcd9",
      },
      fontFamily: { poppins: "Poppins", inter: "Inter", petrona: "Petrona" },
      borderRadius: { "3xs": "10px", "8xs": "5px", "26xl": "45px" },
    },
    fontSize: {
      lg: "1.13rem",
      xs: "0.75rem",
      "2xs": "0.69rem",
      sm: "0.88rem",
      "21xl": "2.5rem",
      "53xl": "4.5rem",
      "45xl": "4rem",
      "9xl": "1.75rem",
      base: "1rem",
      "3xl": "1.38rem",
      "15xl": "2.13rem",
      "5xl": "1.5rem",
    },
  },
  corePlugins: { preflight: false },
};
