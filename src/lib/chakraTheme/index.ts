import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { themeTokens } from "./tokens";

export const config = defineConfig({
  theme: {
    tokens: {
      ...themeTokens,
    },
  },
  globalCss: {
    body: {
      margin: "0 auto",
      color: "brand-neutral.800",
      minHeight: "100vh",
      padding: "0",
      fontWeight: "normal",
      fontFamily: "system-ui, sans-serif",
      height: "100vh",
      flexDirection: "column",
      scrollBehavior: "smooth",
      display: "flex",
    },
  },
});

export default createSystem(defaultConfig, config);
