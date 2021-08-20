/* eslint-disable global-require */
const tailwindcss = require('tailwindcss');

module.exports = {
  // eslint-disable-next-line global-require
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
};
// module.exports = {
//   plugins: [
//     require('postcss-preset-env')({ stage: 0 }),
//     require('tailwindcss')('tailwind.js'),
//     require('autoprefixer'),
//   ],
// };
