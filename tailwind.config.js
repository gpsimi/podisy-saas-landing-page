/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['40px', '58px'],
      '6xl': ['70px', '78px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        josefinSans: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'primary': "#161617",
        "buttonColor": "#F2F6FB",
        "excitement": "#1C1D1D",
        "main": "#CDD1D9",
        "white-400": "#D3D3D4",
        "borderColor": "#292929"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}

