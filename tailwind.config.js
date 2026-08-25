/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F6F3EC',
        surface: {
          DEFAULT: '#F1ECE1',
          elevated: '#FBF9F4',
        },
        ink: {
          DEFAULT: '#16151A',
          dim: '#4B4740',
          muted: '#71695D',
          faint: '#8A8479',
        },
        accent: {
          DEFAULT: '#16151A',
          light: '#3A362F',
          muted: 'rgba(22, 21, 26, 0.08)',
        },
        rule: 'rgba(22, 21, 26, 0.12)',
        status: '#4ADE80',
        border: '#E2DDCF',
      },
      fontFamily: {
        display: ['"Domine"', 'Georgia', 'serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
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
