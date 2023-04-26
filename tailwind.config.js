/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#146C94',
          secondary: '#444444',
          accent: '#FD841F',
          neutral: '#23282E',
          'base-100': '#0F0E0E',
          info: '#0091D5',
          success: '#B6EB7A',
          warning: '#FFE162',
          error: '#D61355',
        },
        light: {
          primary: '#146C94',
          secondary: '#444444',
          accent: '#FD841F',
          neutral: '#23282E',
          'base-100': '#F3F5F6',
          info: '#0091D5',
          success: '#B6EB7A',
          warning: '#FFE162',
          error: '#D61355',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
