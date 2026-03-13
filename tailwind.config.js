/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  safelist: [
    'bg-gradient-to-br',
    'from-emerald-200',
    'via-green-100',
    'to-teal-100',
  ],
  theme: {
    extend: {
      backgroundSize: {
        'default': '100% 100%',
      },

      colors: {
        yellowGold: '#FFD700',
        lightgreen: '#90ee90',
        skyblue: '#add8e6',
        pastelgreen: '#E8F5E9',
        neongreen: '#39FF14',

        brown: {
          100: '#d9c5a1',
          200: '#c29b6c',
          300: '#a67345',
          400: '#8c4c1f',
          500: '#733a00',
          600: '#5e2f00',
          700: '#4b2400',
          800: '#381900',
          900: '#2c0f00',
        },
      },

      boxShadow: {
        '2xl': '0 10px 15px rgba(0, 0, 0, 0.1)',
        '3xl': '0 20px 30px rgba(0, 0, 0, 0.2)',
      },

      // ✅ IDE JÖN AZ ANIMÁCIÓ
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },

      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(8px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};