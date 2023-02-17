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
      spacing: {
        'main': '68.75rem',
        'section': '34.375rem',
        'section-h': '28.125rem',
      }
    },
    fontSize: {
      base: '0.9375rem',
      title: '2.2rem',
      mobileTitle: '1.7rem',
      numbers: '1.6rem',
      mobileNumbers: '1.5rem',
      mobileBase: '0.85rem',
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'Deca': ['Lexend Deca', 'sans-serif'],
    }
  },
  plugins: [],
}
