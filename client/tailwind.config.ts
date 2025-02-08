import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ["var(--montserrat-font)", ...fontFamily.sans],
        josefinSans: ["var(--josefin-sans-font)", ...fontFamily.sans],
        roboto: ["var(--roboto-font)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
