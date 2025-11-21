/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Slate / neutrals
        slate: {
          300: '#cbd5f5',
          400: '#94a3b8',
          500: '#64748b',
          900: '#020617',
        },

        // Indigo (primary accent)
        indigo: {
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#1e1b4b',
        },

        // Emerald (secondary accent)
        emerald: {
          200: '#bbf7d0',
          400: '#4ade80',
          500: '#22c55e',
        },

        // Rose / red highlights
        rose: {
          300: '#fecaca',
          500: '#f43f5e',
        },

        // Yellow highlights
        yellow: {
          300: '#fde68a',
          500: '#eab308',
        },

        // White (ensure exact)
        white: '#ffffff',

        // Keep primary as an alias pointing to indigo for existing usage
        primary: {
          50:  '#f0f4ff',
          100: '#dfe9ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#2b256e',
          900: '#1e1b4b',
        },
      },
    },
  },
  plugins: [],
};
