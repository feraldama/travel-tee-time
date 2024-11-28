/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}", // Escanea todos los archivos en la carpeta src
  ],
  theme: {
    extend: {
      colors: {
        "tuiu-blue": {
          50: "#D3E9F5",
          100: "#C4E4F6",
          200: "#AEE0FC",
          300: "#4095DB",
          400: "#327DBB",
        },
        "tuiu-green": {
          100: "#CBE9D1",
          200: "#BAE0C2",
          300: "#205E5E",
          400: "#1B4E4E",
          500: "#1b485a",
        },
        "tuiu-gray": {
          50: "#eef4f7",
          100: "#DEDEDE",
          300: "#9E9E9E",
          400: "#717171",
          500: "#404040",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
