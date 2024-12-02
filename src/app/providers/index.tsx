'use client';

import { ChakraProvider } from '@chakra-ui/react';

import { StoreProvider } from '@/app/providers/StoreProvider';
import customTheme from '@/lib/chakraTheme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <ChakraProvider value={customTheme}>{children}</ChakraProvider>
    </StoreProvider>
  );
}
