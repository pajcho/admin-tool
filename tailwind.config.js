const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  important: true,
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      // Convert to desktop first and use DIB breakpoints
      // lg: { max: '1919.99px' }, // 1280px-1919.99px (desktop default)
      md: { max: '1279.99px' }, // 960px-1279.99px
      sm: { max: '959.99px' }, // 600px-959.99px
      xs: { max: '599.99px' }, // 360px-599.99px (mobile default)
      // tn: { max: '359.99px' }, // 0px-359.99px (legacy deprecated)
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs': '0.625rem', // 10px
      },
      maxWidth: {
        '2xs': '10rem', // 160px
      },
      colors: {
        current: 'currentColor',
        'dib-gray': {
          100: '#f3f3f3',
        },
        'dib-green': {
          500: '#00B054',
          600: '#39845C',
        },
        'dib-red': {
          600: '#ff5736',
        },
      },
    },
  },
  corePlugins: {},
  plugins: [
    // eslint-disable-next-line prefer-arrow-callback, func-names
    plugin(function ({ addUtilities, addVariant }) {
      const newUtilities = {
        '.position-unset': { position: 'unset' },
      };

      addUtilities(newUtilities);
      addVariant('empty', '&:empty');
    }),
  ],
};
