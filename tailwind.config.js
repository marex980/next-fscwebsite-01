/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': 'hsl(205 65% 8%)',
        'secondary-white': 'hsl(0 0% 95%)',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      fontSize: {
        xxl: "clamp(2rem, 0.23529411764705888rem + 11.76470588235294vw, 8rem)",
      },
    },
  },
  plugins: [],
};