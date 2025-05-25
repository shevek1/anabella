/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
    './components/**/*.{astro,html,js,jsx,ts,tsx}',
    './layouts/**/*.{astro,html,js,jsx,ts,tsx}',
    './pages/**/*.{astro,html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
       fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
          lola: ['Merriweather', 'serif'],
      },
      
      colors: {
        grape: '#6b4a5f',
        terracotta: '#c65c5c',
        mustard: '#d2a547',
        mauve: '#9c728e',
        dustyrose: '#c07b78',
        primary: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554"
        }
      },
    }
  },
  plugins: [],
};
