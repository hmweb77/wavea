import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '130': '1.3',
        '170': '1.7',
        '160': '1.6',
        '180': '1.8',
        '126': '1.26',
      },
      borderRadius: {
        '26': '26px',
      },
      fontWeight: {
        'semi-bold': '600',
        'bold': '700',
      },
      fontSize: {
        'xs': '.75rem',     // 12px
        'sm': '.875rem',    // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '40': '2.5rem',     // 40 px
        '5xl': '3rem',      // 48px
        '6xl': '4rem',      // 64px
        // Custom sizes
        'hero-mobile': '1.5rem',  // Example for mobile
        'hero-desktop': '3rem',   // Example for desktop
      },
      width: {
        'logo-mobile': '88px',
        'logo-desktop': '109px',
        '153': '153px',
        '133': '133px',
        '180': '180px',
        '200': '200px',
        '280': '280px',
        '300': '300px',
        '308': '308px',
        '345': '345px',
        '368': '368px',
        '382': '382px',
        '390': '390px',
        '500': '500px',
        '650': '650px',
        '1170': '1170px',
        "673":' 673px',

      },
      height: {
        'logo-mobile': '39px',
        'logo-desktop': '48px',
        '27': '27px',
        '56': '56px',
        '106': '106px',
        '120': '120px',
        '133': '133px',
        '200': '200px',
        '330': '330px',
        '454': '454px',
        '442': '442px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        Lexend: ['Lexend Deca', 'sans-serif'],
      },
      backgroundImage: {
      },
      colors: {
        black: {
          100: '#171717',
          200: '#191919'
        },
        blue: {
          100: '#4C8EBC',
          200: '#457FBE',
          300: '#539FD6',
          400: '#4B94C7',
          500: '#05303F'
        },
        yellow: {
          100: '#FFC310'
        },
        gray: {
          100: '#A7A7A7',
          200: '#757575'
        },
        white: {
          200: '#F9F9F9',
          400: '#757575'
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config
