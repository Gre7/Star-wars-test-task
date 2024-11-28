import type { ReactNode } from "react";
import { Karla } from "next/font/google";

import { Providers } from "@/app/providers";
import { Viewport } from "next";

import "./styles/globals.scss";
import Header from "@/widgets/Header/Header";

interface Props {
  readonly children: ReactNode;
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const karlaFont = Karla({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karlaFont.className}>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
