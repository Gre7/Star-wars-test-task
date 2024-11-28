"use client";

import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/lib/chakraTheme";
import { StoreProvider } from "@/app/providers/StoreProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <ChakraProvider value={customTheme}>{children}</ChakraProvider>
    </StoreProvider>
  );
}
