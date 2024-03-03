import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {},
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      themes: {
        light: {
          colors: {
            primary: {
              // nuances de blanc et gris
              50: "#fdfcfe",
              100: "#faf7ff",
              200: "#f5e6ff",
              300: "#e3ccff",
              400: "#bc87ff",
              500: "#8951cc",
              600: "#5d2a99",
              700: "#310066",
              800: "#0a0033",
              900: "#000000",
              foreground: "#000000",
              DEFAULT: "#b476ff",
              },
            }
          },
        dark: {
          colors: {},
        },
      },
    }),
  ],
}
export default config
