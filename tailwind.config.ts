import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ivory_super_light: '#f7f5f0',
        ivory_light: '#f5f2e9',
        ivory: '#F2E5BF',
        oldnavy: '#257180',
        retro_orange: '#FD8B51',
        dark_orange: '#CB6040',
        retro_gray: '#373A40',
      },
    },
  },
  plugins: [],
};
export default config;
