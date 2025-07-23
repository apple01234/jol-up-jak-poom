/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00f5ff', // 사이버 블루
        secondary: '#ff006e', // 네온 핑크
        accent: '#8b5cf6', // 보라
        success: '#00ff88', // 네온 그린
        warning: '#ffd700', // 골드
        danger: '#ff3366', // 네온 레드
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#1a1a2e',
        'bg-tertiary': '#16213e',
        'bg-glass': 'rgba(255,255,255,0.1)',
        'text-primary': '#ffffff',
        'text-secondary': '#b8bcc8',
        'text-tertiary': '#6b7280',
        'text-accent': '#00f5ff',
        'color-border': '#262626',
      },
      fontFamily: {
        tech: [
          'JetBrains Mono',
          'Fira Mono',
          'Consolas',
          'Menlo',
          'monospace',
        ],
        sans: [
          'Inter',
          'Poppins',
          'Roboto',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        'neon': '0 0 16px 2px #00f5ff99',
        'glass': '0 4px 32px 0 rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, #00f5ff 0%, #8b5cf6 100%)',
        'glass': 'linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(0,245,255,0.08) 100%)',
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px #00f5ff)' },
          '50%': { filter: 'drop-shadow(0 0 24px #00f5ff)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both',
        'glow': 'glow 1.5s infinite alternate',
      },
    },
  },
  plugins: [],
}