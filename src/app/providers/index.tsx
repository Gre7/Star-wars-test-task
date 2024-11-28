"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import customTheme from "@/lib/chakraTheme";
import { StoreProvider } from "@/app/providers/StoreProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <ChakraProvider value={defaultSystem}>
        <ThemeProvider attribute="class" disableTransitionOnChange defaultTheme='light'>
          {children}
        </ThemeProvider>
      </ChakraProvider>
    </StoreProvider>
  );
}
