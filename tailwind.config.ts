import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EB5B00',
        'secondary': '#D91656',
        'icon_color': '#640D5F',
      },
      fontSize: {
        'xxs': '.625rem', // 10px
      },
    },
  },
  plugins: [],
}
export default config
