import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/image/f1.svg')",
        'footer-texture': "url('/image/f2.svg')",
        'rectangle-one': "url('/image/layer1.svg')",
        'ecommerce': "url('/image/Rectangle 4167.png')",
        'bg-1': "url('/image/bg.svg')",
        'left-frame': "url('/image/bgl.svg')",
        'right-frame': "url('/image/bgr.svg')",
        'problem-solution3': "url('/image/ps3.svg')",
        'email-support': "url('/image/frame2.svg')",
        'slider': "url('/image/slider.svg')",
        'emailcustomer': "url('/image/virtualass.png')",
      },
    },
  },
  plugins: [],
}
export default config
