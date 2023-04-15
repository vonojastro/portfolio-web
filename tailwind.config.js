/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    'tailwindcss',
    'postcss-flexbugs-fixes',
    'postcss-preset-env',
    require('tailwindcss')({
      // ...
      experimental: {
        applyComplexClasses: true,
        defaultLineHeights: true,
        extendedFontSizeScale: true,
      },
    }),
  ],
  
}
