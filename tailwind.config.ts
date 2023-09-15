import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/images/bg-header.svg')",
      },
      colors: {
        darkViolet: '#110F21',
        violet: '#252142',
        lightViolet: "#9788FB",
        lightGray: "#C8C8E4",
        white: "#FFFFFF",

        blue: "#84D5FF",
        pink: "#F884FF",
        red: "#FF84A6",
        yellow: "#FFD384",
        green: "#A0FF84",
        lightGreen: "#C0ECC3"
      }
    },
  },
  plugins: [],
}
export default config
