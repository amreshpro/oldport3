export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
colors:{
"main":"#0a192f",
"primary":"#0a192f",
"secondary":"#233554",
"ternary":"#64ffda",
"black":"#000",
"navy": "#0a192f",
"light-navy": "#112240",
"lightest-navy": "#233554",
"navy-shadow": "rgba(2, 12, 27, 0.7)",
"dark-slate": "#495670",
"slate": "#8892b0",
"light-slate":"#a8b2d1",
"lightest-slate":"#ccd6f6",
"white": "#e6f1ff",
"green":"#aaff00",
"green-tint":"rgba(100, 255, 218, 0.1)",
"pink":"#f57dff",
"blue": "#57cbff",
"red":"#dd0000"


},
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

    extend: {},
  },

}

