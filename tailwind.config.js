const colors = require("tailwindcss/colors");
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
 ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '260px',
    },
  
    
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
      colors: {
        blueGray: colors.blueGray
      },
    }
  },
  plugins: [],
}
