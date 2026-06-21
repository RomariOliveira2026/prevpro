"use client";

import { PublicThemeProvider } from "./public-theme-provider";
import { BackToTop } from "./back-to-top";
import { WhatsAppButton } from "./whatsapp-button";

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <PublicThemeProvider>
      {children}
      <BackToTop />
      <WhatsAppButton />
    </PublicThemeProvider>
  );
}
