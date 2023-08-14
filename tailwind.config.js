export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
      'xsm': { 'max': '339px' },
      // => @media (max-width: 639px) { ... }
    },

    colors:{
      'primary':"#0C4A6E",
      'primaryLight':'#D946EF',
      'secondary':"#0891B2",
      'ternary':"#BEF264",
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
      "purple400":"#C084FC",
      "pink600":"#DB2777",
      "emraldLight":"#6EE7B7",
      "bar":"#06B6D4",
      "github":"#1F2937",
      "play":"#F97316"
          },


    extend: {},
  },
}

