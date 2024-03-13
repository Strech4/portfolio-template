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
                "high-contrast": "#EEEEEE",
                "low-contrast": "#B4B4B4",
                "bg": "#111111",
                "bg-2": "#191919",
                "bg-ui": "#222222",
                "button": "red",
                "hover": "#2A2A2A",
                "separator": "#3A3A3A",
            },
            fontFamily: {
                roboto: ['var(--font-inter)'],
            },
        },
    },
    plugins: [],
};
export default config;