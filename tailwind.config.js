/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a',
          light: '#3b82f6',
        },
        purple: {
          DEFAULT: '#7c3aed',
          light: '#8b5cf6',
        },
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-8px)',
          },
          '60%': {
            transform: 'translateY(-4px)',
          },
        },
        fadeInOut: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50%) translateY(-5px)',
          },
          '10%': {
            opacity: '1',
            transform: 'translateX(-50%) translateY(0)',
          },
          '90%': {
            opacity: '1',
            transform: 'translateX(-50%) translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-50%) translateY(-5px)',
          },
        },
        slideDown: {
          from: {
            opacity: '0',
            transform: 'translateX(-50%) translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(-50%) translateY(0)',
          },
        },
        slideOutLeft: {
          from: {
            transform: 'translateX(0)',
            opacity: '1',
          },
          to: {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
        },
        slideOutRight: {
          from: {
            transform: 'translateX(0)',
            opacity: '1',
          },
          to: {
            transform: 'translateX(100%)',
            opacity: '0',
          },
        },
        slideInLeft: {
          from: {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideInRight: {
          from: {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        celebrate: {
          '0%, 100%': {
            transform: 'scale(1) rotate(0deg)',
          },
          '25%': {
            transform: 'scale(1.2) rotate(-10deg)',
          },
          '50%': {
            transform: 'scale(1.3) rotate(10deg)',
          },
          '75%': {
            transform: 'scale(1.2) rotate(-5deg)',
          },
        },
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce': 'bounce 2s infinite',
        'fade-in-out': 'fadeInOut 2s ease-in-out',
        'slide-down': 'slideDown 0.2s ease-out',
        'slide-out-left': 'slideOutLeft 0.3s ease-out both',
        'slide-out-right': 'slideOutRight 0.3s ease-out both',
        'slide-in-left': 'slideInLeft 0.3s ease-out both',
        'slide-in-right': 'slideInRight 0.3s ease-out both',
        'celebrate': 'celebrate 0.6s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
    },
  },
  plugins: [],
}
