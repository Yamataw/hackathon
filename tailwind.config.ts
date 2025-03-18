import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#f3f3f8",
        foreground: "#000000",
        primary: {
          DEFAULT: "#0c131f",
          foreground: "#fff",
        },
        secondary: {
          DEFAULT: "#efefef",
          foreground: "#000",
        },
        destructive: {
          DEFAULT: "#EF4444FF",
          foreground: "#fff",
        },
        muted: {
          DEFAULT: "#fff",
          foreground: "#303030",
        },
        accent: {
          DEFAULT: "#8de8fe",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#fff",
          foreground: "#000",
        },
        card: {
          DEFAULT: "#fff",
          foreground: "#000",
        },
        green: {
          DEFAULT: "#fff",
          foreground: "#10B981",
        }
      },
      borderRadius: {
        lg: "2rem",
        md: "1rem",
        sm: "0.5rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

