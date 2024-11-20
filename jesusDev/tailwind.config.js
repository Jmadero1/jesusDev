/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: { 
      transitionProperty: {
        'transform-shadow': 'transform, shadow',
      },
      fontFamily : {
        'mono': ['ui-monospace', 'SFMono-Regular']
      }
    },
  },
  plugins: [tailwindScrollbar],
  corePlugins: {
    preflight: true,
  },
};
