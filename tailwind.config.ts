import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage:{
        'waves': "url('../assets/wave-haikei (1).svg')", 
        'wave-path': "url('../assets/stacked-waves-haikei (1).svg')", 
        'custom-wave':`url("data:image/svg+xml;charset=UTF-8,%3csvg width='100' height='15' viewBox='0 0 21 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2 4.5L4.03467 3.06376C5.32387 2.15374 7.0755 2.27694 8.22462 3.35846V3.35846C9.50297 4.56162 11.497 4.56162 12.7754 3.35846V3.35846C13.9245 2.27694 15.6761 2.15374 16.9653 3.06376L19 4.5' stroke='%2300F5D3' stroke-width='2' stroke-linecap='round'/%3e%3c/svg%3e ")`,
      }, 
      colors: {
        blue: {
          300: '#6CD1FF',
          400: '#4B94C7',
          500: '#457FBE',
          700: '#4C8EBC',
          600: '#05303F',
          800: '#1C465A',
          900: '#194C66'
        },
        yellow:{
          200:'#FFC310'
        },
        gris:{
          200:'#A7A7A7',
          400:'#757575'
        },
        white:{
          200:'#F9F9F9',
          400:'#757575'
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config
