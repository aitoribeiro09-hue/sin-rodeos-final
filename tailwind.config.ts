import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: "#0B0B0B", // Editorial Black
                    text: "#F2F2F2", // Off-white
                    textSecondary: "#9A9A9A", // Editorial Grey
                    accent: "#B11226", // Deep Red
                }
            },
            borderRadius: {
                'sm': '0.125rem',
                'md': '0.25rem',
                'lg': '0.375rem',
            },
            fontFamily: {
                serif: ['var(--font-playfair)', 'serif'],
                sans: ['var(--font-inter)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
