/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens:{
      sm: '480px',
      md:  '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1660px',
      'box': '1170px'
    },
    extend: {
      colors:{
        primary: '#EF0868',
        secondary: 'green',
      },
      fontFamily:{
        inter: "'Inter', sans-serif",
      },
    }
  },
  plugins: [],
}
