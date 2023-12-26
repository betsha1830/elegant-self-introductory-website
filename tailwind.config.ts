import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: "#B88068",
      },
      boxShadow: {
        cust: "-10px 10px 20px 10px rgba(0, 0, 0, .25)",
      },
    },
  },
  plugins: [],
}
export default config
