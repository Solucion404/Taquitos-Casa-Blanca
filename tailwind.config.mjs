/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#F39200',
        'bg-cream':       '#FDD5A5',
        'brand-black':    '#000000',
      },
      fontFamily: {
        bungee: ['Lilita One', 'Impact', 'Arial Black', 'sans-serif'],
        body:   ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
