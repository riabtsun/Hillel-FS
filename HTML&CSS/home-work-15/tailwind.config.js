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
      gridAutoRows: {
        '33vh': '33vh',
        'custom': `calc(33.33333vh - ${40 / 3}px)`,
      },
      gridTemplateAreas: {
        layoutXl: [
          'a1 a1 a2 a3',
          'a4 a5 a5 a6',
          'a7 a8 a9 a6',
        ],
        layoutLg: [
          'a1 a1 a2',
          'a3 a4 a4',
          'a5 a5 a6',
          'a7 a9 a9',
        ],
        layoutSm: [
          'a1 a2',
          'a3 a2',
          'a4 a4',
          'a5 a6',
          'a5 a7',
          'a8 a9',
        ],
        layout: [
          'a1', 'a2' ,'a3' ,'a4' ,'a5','a6', 'a7', 'a8', 'a9',
        ],
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
      fontSize: { base: '16px' },
      spacing: {
        gap: gap + 'px',
        gapSm: `${gap * 0.5}px`,
        gapLg: `${gap * 1.5}px`,
        gapX2: `${gap * 2}px`,
        gapX3: `${gap * 3}px`,
        gapX4: `${gap * 4}px`,
        gapX5: `${gap * 5}px`,
      },
      minWidth: {
        custom: 'min(100% - 40px, 1340px)',
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
}

