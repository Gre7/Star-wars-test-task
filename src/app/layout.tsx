import type { ReactNode } from "react";
import { Karla } from "next/font/google";

import { Providers } from "@/app/providers";
import { Viewport } from "next";

import "./styles/globals.scss";
import Header from "@/widgets/Header/Header";
import { karlaFont } from "@/app/fonts/fonts";

interface Props {
  readonly children: ReactNode;
}

export const viewport: Viewport = {
  width: "device-width",
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
