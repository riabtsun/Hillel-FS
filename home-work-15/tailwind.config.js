/** @type {import('tailwindcss').Config} */

let gap = 20
module.exports = {
  content: ['*.html'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#2d3651',
      accent: '#d66926',
      highLight: '#d53d27',
      gray: '#637588',
      grayLight: '#e5e5e5',
      grayDark: '#44596e',
      white: '#fff',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      ul: '1340px',
    },
    extend: {
      textColor: {
        tomato: 'tomato',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
      fontSize: { base: '16px' },
      spacing: {
        gap: gap + 'px',
        gapSm: `${gap / 2}px`,
        gapLg: `${gap * 1.5}px`,
        gapX2: `${gap * 2}px`,
        gapX3: `${gap * 3}px`,
        gapX4: `${gap * 4}px`,
        gapX5: `${gap * 5}px`,
      },
      minWidth:{
        custom: 'min(100% - 40px, 1300px)'
      }
    },
  },
  plugins: [],
}

