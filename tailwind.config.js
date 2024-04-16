/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      white: '#fafafa',
      black: '#1a1a1a',
      gray: '#cccccc',
      grayer: '#dddddd',
    },
    fontFamily: {
      zenkaku: ['Zen Kaku Gothic New', 'sans-serif'],
    },
  },
  darkMode: 'class',
  plugins: [],
}
