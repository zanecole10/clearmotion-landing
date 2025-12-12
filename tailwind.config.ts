import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1d1d1f',
          light: '#424245',
        },
        secondary: {
          DEFAULT: '#86868b',
          light: '#a1a1a6',
        },
        accent: {
          DEFAULT: '#0071e3',
          hover: '#0077ed',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f5f5f7',
          dark: '#1d1d1f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        content: '720px',
        section: '1120px',
      },
      borderRadius: {
        button: '980px',
      },
    },
  },
  plugins: [],
};

export default config;
