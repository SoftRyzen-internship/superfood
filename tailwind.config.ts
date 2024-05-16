import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      smOnly: { max: '767px' },
      md: '768px',
      mdOnly: { max: '1279px' },
      xl: '1280px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '34px',
          xl: '2rem',
        },
      },
      backgroundImage: {
        bg_green: `image-set(url('/images/bg/bg_green@1x.webp') 1x, url('/images/bg/bg_green@2x.webp') 2x)`,
      },
      fontFamily: {
        geologica: ['var(--font-geologica)'],
        roboto: ['var(--font-roboto)'],
      },
      fontSize: {
        light: ['16px', '1.35'],
        medium: ['18px', '1.35'],
        lightLarge: ['24px', '1.35'],
        large: ['26px', '1.35'],
        extraLarge: ['32px', '1.35'],
      },
      colors: {
        green: '#1F7437',
        darkGreen: '#0F5924',
        lightGreen: '#F1FAE1',
        black: '#3B433E',
        white: '#FFFFFF',
        input: '#F6F9F1',
        accent: '#FFE55E',
        grey: '#859589',
        strokeGreen: '#579368',
        strokeLightGreen: '#CADAB0',
        button: '#177531',
        red: '#FF0000',
        backdrop: 'rgba(0, 0, 0, 0.65)',
        textBody: '#4D4843',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
