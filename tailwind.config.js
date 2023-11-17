/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        primary: "#60a5fa",
      },
    },
  },
  plugins: [],
};
