/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'l-white': '-10px 0 10px white',
      },
      fontSize: {
        xs: ['0.25rem', '0.35rem'],
        sm: ['0.35rem', '0.45rem'],
        base: ['0.45rem', '0.55rem'],
        lg: ['0.55rem', '0.65rem'],
        xl: ['0.65rem', '0.75rem'],
        '2xl': ['0.75rem', '0.85rem'],
        '3xl': ['0.85rem', '0.95rem'],
        '4xl': ['0.95rem', '1.05rem'],
        '5xl': ['1rem', '1.1rem'],
        '6xl': ['1.1rem', '1.2rem'],
      },
    },
  },
  plugins: [],
}
