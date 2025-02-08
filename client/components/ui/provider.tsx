"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { buttonRecipe } from "../recipes/button";

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
        accent: {
          value: "$8e0bb0",
        },
        primary: {
          value: "#4525a7",
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
});

const system = createSystem(defaultConfig, customConfig);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
