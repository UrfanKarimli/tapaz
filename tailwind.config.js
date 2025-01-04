/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'max-of': { 'max': '349px' },
      'max-sm': { 'max': '639px' },
      'max-md': { 'max': '767px' },
      'max-lg': { 'max': '949px' },
      'max-xl': { 'max': '1023px' },
      'max-2xl': { 'max': '1280px' },
      "of": "350px",
      "sm": "640px",
      "md": "768px",
      "lg": "951px",
      "xl": "1024px",
      "2xl": "1280px",
    },
    fontFamily: {
      'poppins': ["Poppins", 'sans-serif',],
      'inter': ["Inter", 'sans-serif',],
      'raleway': ["Raleway", 'sans-serif'],
      'lato': ["Lato", 'sans-serif',],
      'arial': ['Helvetica', 'Arial', 'san-serif'],
      'bebas': ["Bebas Neue", 'sans-serif'],
      'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
    },
    container: {
      center: true,
      screens: {
        'max-of': { 'max': '349px' },
        'max-sm': { 'max': '639px' },
        'max-md': { 'max': '767px' },
        'max-lg': { 'max': '949px' },
        "lg": "951px",
      },
    },

    extend: {
      boxShadow: {
        'custom-light': '0 17px 34px 0 rgba(44,39,56,0.04), 0 8px 17px 0 rgba(44,39,56,0.02)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
}