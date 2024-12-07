/** @type {import('tailwindcss').Config} */
//const defaultTheme = require('tailwindcss/defaultTheme')

import defaultTheme from "tailwindcss/defaultTheme"


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      'xs': {'min': '320px', 'max': '479px'},
      // => @media (min-width: 360px and max-width: 479px) { ... }

      'sm': {'min': '480px', 'max': '767px'},
      // => @media (min-width: 480px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1439px'},
      // => @media (min-width: 1024px and max-width: 1439px) { ... }

      'xl': {'min': '1024px'},
      // => @media (min-width: 1024px) { ... }

      '2xl': {'min': '1440px'},
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      animation: {
        typing: 'typing 2s steps(6), blink 1s infinite',
      },
       keyframes: {
        typing: {
          from: {
            width: '0'
          },
          to: {
            width: '6ch'
          },
        },
        blink: {
          from: {
            'border-right-color': 'transparent'
          },
          to: {
            'border-right-color': 'black'
          },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        tpWhite: 'rgba(255, 255, 255, 0.9)'
      },
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        theamColor: '#00BCD5'
      }
    },
  },
  plugins: [],
};
