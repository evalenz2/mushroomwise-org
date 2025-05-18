/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ecefff',
          200: '#d8dfff',
          300: '#b6c4ff',
          400: '#8a9eff',
          500: '#6b7eff',
          600: '#4b58ff',
          700: '#3a44db',
          800: '#2d36b3',
          900: '#252e8c',
        },
        secondary: {
          50: '#f3f7f6',
          100: '#e7eeec',
          200: '#c4d5d0',
          300: '#a0bbb4',
          400: '#7ca297',
          500: '#588880',
          600: '#4a7269',
          700: '#3d5e57',
          800: '#304944',
          900: '#233532',
        },
        mushroom: {
          100: '#f9f6f2',
          200: '#f0e8e0',
          300: '#e1d2c1',
          400: '#c2a990',
          500: '#9a7e5e',
          600: '#7a6245',
          700: '#5d4b33',
          800: '#3f3322',
          900: '#211a11',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
