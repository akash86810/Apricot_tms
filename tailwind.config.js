module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'league-spartan': ['League Spartan', 'sans-serif'],
      },
      colors: {
        primary: {
          background: '#fafafa',
          foreground: '#444444',
        },
        secondary: {
          background: '#f6f6f6',
          foreground: '#5d5d5d',
        },
        accent: {
          DEFAULT: '#0b60b0',
          foreground: '#ffffff',
        },
        border: {
          primary: '#888888',
          secondary: '#d1d1d1',
          light: '#e7e7e7',
        },
        text: {
          primary: '#454545',
          secondary: '#4f4f4f',
          muted: '#888888',
        },
      },
    },
  },
  plugins: [],
};
