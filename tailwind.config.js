/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    colors:{
'primary':"#701A75",
'primaryLight':'#D946EF',
'secondary':"#EC4899",
'ternary':"#F9A8D4",
'white':"#ffffff",
'black':"#000000",
'gray':"#F8FBFD",
'green':"#A3E635",
'red':"#FCA5A5",
'blue':"#2563EB",
"purple":"#A855F7",
"gold":"#FBBF24",
"tree":"#65A30D",
"blueGray":"#94A3B8",
    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sp:{max:"700px"},
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xsm: { max: "339px" },
      // => @media (max-width: 639px) { ... }
      xsm2: { max: "305px" },
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
