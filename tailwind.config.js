export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F8F4ED',
        },
        sage: '#B2AC88',
        'sage-light': '#D4D9C6',
        'sage-dark': '#8E896B',
        eucalyptus: '#5F8575',
        'eucalyptus-light': '#8BA69C',
        'eucalyptus-dark': '#4A685B',
        blush: '#E8C5C5',
        'blush-light': '#F4E4E4',
        'blush-dark': '#D1A3A3',
        espresso: '#3D3635',
        'espresso-light': '#5C5452',
        'espresso-dark': '#1A1615',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'bloom': 'bloom 2s ease-out forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bloom: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
