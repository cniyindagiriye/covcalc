module.exports = {
  mode: 'jit',
  purge: {
    preserveHtmlElements: false,
    options: {
      keyframes: false,
    },
    content: [
      './src/**/*.jsx',
      './src/**/*.js',
      './public/index.html',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};
