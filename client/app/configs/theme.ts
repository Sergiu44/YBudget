import { buttonRecipe } from "@/components/recipes/button";
import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        backgroundLight: {
          value: "#F7F7F7",
        },
        text: {
          value: "#434549",
        },
        primary: {
          50: { value: "#090515" },
          100: { value: "#11092a" },
          200: { value: "#231254" },
          300: { value: "#341c7d" },
          400: { value: "#4525a7" },
          500: { value: "#572ed1" },
          600: { value: "#7858da" },
          700: { value: "#9a82e3" },
          800: { value: "#bcabed" },
          900: { value: "#ddd5f6" },
          950: { value: "#eeeafa" },
        },
        accent: {
          50: { value: "#130218" },
          100: { value: "#270330" },
          200: { value: "#4e0660" },
          300: { value: "#750990" },
          400: { value: "#9c0cc0" },
          500: { value: "#c30ff0" },
          600: { value: "#cf3ff3" },
          700: { value: "#db6ff6" },
          800: { value: "#e79ff9" },
          900: { value: "#f3cffc" },
          950: { value: "#f9e7fd" },
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
