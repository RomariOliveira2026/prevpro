import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LANDING_CONTACT } from "@/lib/landing-data";
import { BRAND_FAVICON, OFFICIAL_LOGO } from "@/lib/brand";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Reduza perdas, controle vencimentos e antecipe riscos com o PrevPro. Plataforma inteligente para supermercados, atacarejos, farmácias e distribuidores.";

export const metadata: Metadata = {
  metadataBase: new URL(LANDING_CONTACT.siteUrl),
  title: {
    default: "PrevPro BR | Sistema Inteligente de Prevenção de Perdas",
    template: "%s | PrevPro BR",
  },
  description: siteDescription,
  keywords: [
    "prevenção de perdas",
    "varejo",
    "supermercado",
    "atacarejo",
    "farmácia",
    "controle de validades",
    "gestão de estoque",
    "PrevPro",
  ],
  authors: [{ name: "PrevPro BR", url: `https://${LANDING_CONTACT.domain}` }],
  creator: "PrevPro BR",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: LANDING_CONTACT.siteUrl,
    siteName: "PrevPro BR",
    title: "PrevPro BR | Sistema Inteligente de Prevenção de Perdas",
    description: siteDescription,
    images: [
      {
        url: OFFICIAL_LOGO.src,
        width: OFFICIAL_LOGO.width,
        height: OFFICIAL_LOGO.height,
        alt: OFFICIAL_LOGO.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrevPro BR | Sistema Inteligente de Prevenção de Perdas",
    description: siteDescription,
    images: [OFFICIAL_LOGO.src],
  },
  icons: {
    icon: BRAND_FAVICON.src,
    shortcut: BRAND_FAVICON.src,
    apple: BRAND_FAVICON.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
