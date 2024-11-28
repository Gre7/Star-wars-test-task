import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

export const colors = {
  colors: {
    success: {
      DEFAULT: { value: "#3EB521" },
    },
    error: {
      DEFAULT: { value: "#E64646" },
    },
  },
};

export const config = defineConfig({
  theme: {
    tokens: {
      ...colors,
    },
    breakpoints: {
      base: "0",
      bp360: "360px",
      bp580: "580px",
      bp768: "768px",
      bp1024: "1024px",
      bp1280: "1280px",
      bp1440: "1440px",
      bp1920: "1920px",
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
