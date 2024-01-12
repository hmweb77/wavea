import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
  
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
  plugins: [],
};

export default config
