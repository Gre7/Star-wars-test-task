import type { ReactNode } from 'react';

import { Viewport } from 'next';

import { karlaFont } from '@/app/fonts/fonts';
import { Providers } from '@/app/providers';
import Header from '@/widgets/Header/Header';
import './styles/globals.scss';

interface Props {
  readonly children: ReactNode;
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning className={karlaFont.className}>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
