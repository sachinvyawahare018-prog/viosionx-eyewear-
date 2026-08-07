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
        brand: {
          blue: "#1E3A8A",    // Primary professional blue accent
          light: "#DBEAFE",   // Light blue for subtle backgrounds/hover states
          dark: "#0F172A",    // Premium dark color for text instead of pure black
          gray: "#F3F4F6",    // Soft gray for section backgrounds
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

export default config;
