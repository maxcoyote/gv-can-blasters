/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#005EE2',
          navy: '#0B1B2B',
          green: '#2F8F4E',
          mint: '#AADDB7',
          sky: '#A5D9EC',
          sand: '#F2C27F',
        },
        ink: '#142433',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '70ch',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        card: '0 6px 24px -8px rgba(11, 27, 43, 0.18)',
      },
    },
  },
  plugins: [],
};
