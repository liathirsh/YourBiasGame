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
        // Colors consistent with what you are already using
        background: "#F7F7FB", // Light pastel background
        success: {
          DEFAULT: "#C1F0DC", // Light pastel green for success state
          hover: "#A3E4C4", // Hover state for success
          border: "#A3E4C4", // Border color for success state
        },
        destructive: {
          DEFAULT: "#F4C7C3", // Light pastel red for incorrect answers
          hover: "#EFA9A4", // Hover state for destructive
          border: "#EFA9A4", // Border color for destructive state
        },
        primary: {
          DEFAULT: "#C3DDFD", // Light pastel blue for primary
          hover: "#AFC7F3", // Hover state for primary
          border: "#AFC7F3", // Border color for primary state
        },
        card: {
          DEFAULT: "#FFFFFF", // White for card background
          foreground: "#171717", // Text color for card content
        },
        muted: {
          DEFAULT: "#E5E7EB", // Light muted color
          foreground: "#6B7280", // Muted text color
        },
        accent: {
          DEFAULT: "#F9A8D4", // Accent color
          foreground: "#831843", // Accent text color
        },
        border: "#D1D5DB", // Default border color
        input: "#F3F4F6", // Input background color
        ring: "#E0E7FF", // Ring color
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
