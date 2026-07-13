/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#E8E2D9',
        surface: {
          DEFAULT: '#F2EDE6',
          elevated: '#FAF7F2',
        },
        ink: {
          DEFAULT: '#111111',
          dim: '#3D3A36',
          muted: '#6B6560',
          faint: '#9A948C',
        },
        accent: {
          DEFAULT: '#2D4A3E',
          light: '#3D6354',
          muted: 'rgba(45, 74, 62, 0.12)',
        },
        rule: 'rgba(17, 17, 17, 0.12)',
        status: '#4ADE80',
        border: 'rgba(17, 17, 17, 0.15)',
      },
      fontFamily: {
        display: ['"Syne"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
