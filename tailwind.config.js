/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
      },
    },
    fontSize: {
      base: '0.9375rem',
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'Deca': ['Lexend Deca', 'sans-serif'],
    }
  },
  plugins: [],
}
