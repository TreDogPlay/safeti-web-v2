export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        safeti: {
          navy:  '#1B3A6B',
          blue:  '#2F80ED',
          light: '#EBF3FF',
          teal:  '#0D9E75',
          dark:  '#0F1F3D',
          gray:  '#F7F8FA',
        }
      },
      fontFamily: { sans: ['Inter','system-ui','sans-serif'] },
      keyframes: {
        shimmer: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.6 } }
      },
      animation: {
        shimmer: 'shimmer 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
