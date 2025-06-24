/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
       keyframes: {
        dropdown: {
          '0%': { opacity: 0, transform: 'scaleY(0.9)' },
          '100%': { opacity: 1, transform: 'scaleY(1)' },
        },
      },
      animation: {
        dropdown: 'dropdown 300ms ease-out',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'league-spartan': ['League Spartan', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        // Primary group
        primary: {
          blue: 'var(--primary-blue)',
          'blue-dark': 'var(--primary-blue-dark)',
          'blue-light': 'var(--primary-blue-light)',
          'blue-lighter': 'var(--primary-blue-lighter)',
          background: 'var(--primary-background, #fafafa)',
          foreground: 'var(--primary-foreground, #444444)',
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        },
        // Secondary group
        secondary: {
          background: 'var(--secondary-background, #f6f6f6)',
          foreground: 'var(--secondary-foreground, #5d5d5d)',
          light: 'var(--secondary-light)',
          dark: 'var(--secondary-dark)',
        },
        // Accent group
        accent: {
          DEFAULT: 'var(--accent-color, #0b60b0)',
          foreground: 'var(--accent-foreground, #ffffff)',
          light: 'var(--accent-light)',
          dark: 'var(--accent-dark)',
        },
        // Background group
        background: {
          primary: 'var(--background-primary)',
          secondary: 'var(--background-secondary)',
          light: 'var(--background-light)',
          'table-alt': 'var(--background-table-alt)',
          'gray-light': '#f5f4f5',
        },
        // Border group
        border: {
          primary: 'var(--border-primary, #888888)',
          secondary: 'var(--border-secondary, #d1d1d1)',
          light: 'var(--border-light, #e7e7e7)',
          dark: 'var(--border-dark)',
        },
        // Text group
        text: {
          primary: 'var(--text-primary, #454545)',
          secondary: 'var(--text-secondary, #4f4f4f)',
          tertiary: 'var(--text-tertiary)',
          muted: 'var(--text-muted, #888888)',
          light: 'var(--text-light)',
          dark: 'var(--text-dark)',
          gray: 'var(--text-gray)',
          heading: '#344054',
          darkgray:'#344054',
          lightgray:'#667085',
        },
        // Status group
        status: {
          assigned: 'var(--status-assigned)',
          closed: 'var(--status-closed)',
          'high-priority': 'var(--status-high-priority)',
          accent: 'var(--status-accent)',
        },
        // Additional bg group from second config
        bg: {
          white: 'var(--bg-white)',
          grayLight: 'var(--bg-gray-light)',
        },
      },
      boxShadow: {
        light: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        medium: '0px 2px 5px rgba(16, 24, 40, 0.12)',
      },
    },
    
  },
  plugins: [],
};
