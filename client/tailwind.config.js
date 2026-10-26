/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--canvas)', surface: 'var(--surface)', sand: 'var(--sand)', terracotta: 'var(--terracotta)', olive: 'var(--olive)', charcoal: 'var(--charcoal)', muted: 'var(--muted)', line: 'var(--line)',
        'paper-cream': 'var(--canvas)', 'warm-border': 'var(--line)', 'ink-black': 'var(--charcoal)', 'stone-gray': 'var(--muted)', 'ash-gray': 'var(--muted)', 'pure-white': 'var(--surface)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Inter', 'ui-sans-serif', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
