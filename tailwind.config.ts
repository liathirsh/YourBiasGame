import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Optional: Keep dark mode if needed
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        background: 'var(--background)',
		foreground: 'var(--foreground)',
		card: {
			DEFAULT: 'var(--card)', 
			foreground: 'var(--card-foreground)',
			bg: "#FFFFFF",
			text: "#171717",
		},
        success: {
          DEFAULT: "#C1F0DC",
          hover: "#A3E4C4",
          border: "#A3E4C4",
		},
        destructive: {
          DEFAULT: "#F4C7C3",
          hover: "#EFA9A4",
          border: "#EFA9A4",
        },
        primary: {
          DEFAULT: "#4e99f5",
          hover: "#AFC7F3",
          border: "#AFC7F3",
        },
        muted: {
          DEFAULT: "#E5E7EB",
          foreground: "#6B7280",
        },
        accent: {
          DEFAULT: "#F9A8D4", 
          foreground: "#831843",
        },
        border: "#D1D5DB", 
        input: "#F3F4F6",
        ring: "#E0E7FF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
