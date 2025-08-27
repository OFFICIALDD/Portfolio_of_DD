/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Instrument Serif', 'serif'],
        'sans': ['Outfit', 'sans-serif'],
      },
      colors: {
        'beige': '#d7c4b0',
        'olive': '#3c3828',
        'warm-white': '#faf9f7',
        'soft-gray': '#8b8680',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'image-reveal': 'imageReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        imageReveal: {
          '0%': { transform: 'scale(1.1)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      borderRadius: {
        'editorial': '16px',
        'soft': '12px',
      },
      boxShadow: {
        'editorial': '0 8px 32px rgba(60, 56, 40, 0.12)',
        'editorial-hover': '0 16px 48px rgba(60, 56, 40, 0.2)',
      },
    },
  },
  plugins: [],
}