/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.js"],
  theme: {
    extend: {
      screens: {
        'md': '768px',
        'lg': '1024px',
      },
    fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
       colors: {
            'primary-blue': 'hsl(231, 69%, 60%)',
            'primary-red': 'hsl(0, 94%, 66%)',
            'dark-blue': 'rgb(37, 43, 70)',
            'grayish-blue': 'rgb(145, 148, 161)',
          }
    }
  },
  plugins: [],
}

