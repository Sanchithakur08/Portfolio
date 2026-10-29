import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#04060d',
          900: '#070b16',
          850: '#0a1020',
          800: '#0f162b',
          700: '#18213d',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(4%, -6%, 0) scale(1.08)' },
        },
        'drift-reverse': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1.05)' },
          '50%': { transform: 'translate3d(-5%, 5%, 0) scale(0.95)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        'drift-reverse': 'drift-reverse 22s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.2, 0.65, 0.3, 1) both',
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
};
