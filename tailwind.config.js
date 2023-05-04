/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1168px',
    },
    extend: {
      colors: {
        gray: '#7c7c7c',
        neutralGray: 'rgba(0, 0, 0, 0.63)',
        green: '#dbf91d',
        lightGreen: '#d3f6db'
      },
    },
  },
  plugins: [],
}
