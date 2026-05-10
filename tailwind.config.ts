import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { brand: { 500: '#0f766e', 600: '#0d665f' } }
    }
  },
  plugins: []
} satisfies Config;
