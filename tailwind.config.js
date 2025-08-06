/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        darkerGrotesque: ['Darker Grotesque', 'serif'],
        roboto: ['Roboto', 'serif'],
        ebgaramond: ['EB Garamond', 'serif'],
        bricolageGrotesque: ['Bricolage Grotesque', 'san-serif']
      },
      colors: {
        primary: '#f6ebff',
        secondary: '#787586',
        darkestMain: '#0B0D28',
        customBlue: {
          light: '#F7F7F8',
          DEFAULT: '#CBCBFF',
          dark: '#0B0D28',
        },
        customGradient: {
          light: '#f9b464',
          DEFAULT: '#ff00ff',
          dark: '#787586',
        },
      },
    },
  },
  plugins: [],
};
