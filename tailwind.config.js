let plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a 'highcontrast' variant for color blind folks
      addVariant('highcontrast', '&:highcontrast')
    })
  ],
  variants: {
    extend: {
      backgroundColor: ['highcontrast'],
      borderColor: ['highcontrast']
    }
  },
}
