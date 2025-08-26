import type { Config } from 'tailwindcss'

export default {
  mode: 'jit',
  content: ["./src/**/*.+(js|jsx|ts|tsx|mdx|md)", "./public/index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      animationDelay: {
        '500': '500ms',
        '1000': '1000ms',
        '2000': '2000ms',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-slow-reverse': 'spin 3s linear reverse infinite',
        'slide-in-left': 'slide-in-left 0.75s ease-in-out',
        'slide-in-left-1': 'slide-in-left 1s ease-in-out',
        'slide-in-left-img': 'slide-in-left 2s ease-in-out',
        'slide-in-right': 'slide-in-right 0.75s ease-in-out',
        'slide-in-right-img': 'slide-in-right 2s ease-in-out',
        'slide-in-top': 'slide-in-top 0.75s ease-in-out',
        'slide-in-top-1': 'slide-in-top 1s ease-in-out',
        'slide-in-bottom': 'slide-in-bottom 0.75s ease-in-out',
      },
      keyframes: {
        'slide-in-top': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(100vh)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      fontFamily: {
        'libre': ['Libre Franklin', 'sans-serif'],
        'dosis': ['Dosis', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
      },
      colors: {
        'accent': 'var(--accent)',
      },
      borderColor: {
        'accent': 'var(--accent)',
        'depth': 'var(--depth)',
        'opposite': 'var(--bg-opposite)',
      },
      borderStyle: {
        'outset': 'outset',
      },
      spacing: {
        '1px': '1px',
        '4vw': '4vw',
        '10vw': '10vw',
      },
      top: {
        'n4px': '-4px',
        'n15px': '-15px',
      },
      right: {
        'n4px': '-4px',
        '-15px': 'n15px',
      },
      fill: {
        'white': 'white',
        'black': 'black',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
      },
      stroke: {
        'white': 'white',
        'black': 'black',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
      },
      backgroundColor: {
        'basic': 'var(--bg-primary)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'tertiary': 'var(--tertiary)',
        'bonus': 'var(--bonus)',
        'depth': 'var(--depth)',
        'opposite': 'var(--bg-opposite)',
      },
      textColor: {
        'basic': 'var(--text-primary)',
        'opposite': 'var(--text-opposite)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  variants: {
    extend: {
      textColor: ['hover', 'active'],
    },
  },
  plugins: [
  ],
  corePlugins: {
  }
} satisfies Config;

