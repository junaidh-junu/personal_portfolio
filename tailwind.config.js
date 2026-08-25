/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F3EA',
        surface: {
          DEFAULT: '#EFE8D8',
          elevated: '#FFFDF7',
        },
        ink: {
          DEFAULT: '#181511',
          dim: '#4A443C',
          muted: '#6E675C',
          faint: '#867E70',
        },
        accent: {
          DEFAULT: '#FF4E1F',
          light: '#FF6F42',
          dark: '#D63C13',
          muted: 'rgba(255, 78, 31, 0.12)',
        },
        rule: 'rgba(24, 21, 17, 0.14)',
        status: '#4ADE80',
        border: '#E4DBC7',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Work Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      rotate: {
        '1.5': '1.5deg',
        '2.5': '2.5deg',
        '-1.5': '-1.5deg',
        '-2.5': '-2.5deg',
        '-3': '-3deg',
      },
    },
  },
  plugins: [],
}
