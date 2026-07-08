import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balpiz Grúas SPA | Arriendo de grúas horquilla",
  description:
    "Balpiz Grúas SPA ofrece arriendo de grúas horquilla para minería, industria y construcción, con soluciones confiables, ágiles y eficientes dentro y fuera de Antofagasta.",
  keywords: [
    "Balpiz Grúas",
    "Balpiz Grúas SPA",
    "arriendo de grúas horquilla",
    "grúas horquilla Antofagasta",
    "arriendo de maquinaria",
    "maquinaria para minería",
    "grúas para industria",
    "grúas para construcción",
  ],
  authors: [{ name: "Vialoop.cl" }],
  creator: "Vialoop.cl",
  publisher: "Vialoop.cl",
  metadataBase: new URL("https://www.balpizgruas.cl"),
  alternates: {
    canonical: "https://www.balpizgruas.cl",
  },
  openGraph: {
    title: "Balpiz Grúas SPA | Arriendo de grúas horquilla",
    description:
      "Arriendo de grúas horquilla para minería, industria y construcción. Soluciones confiables, ágiles y eficientes dentro y fuera de Antofagasta.",
    url: "https://www.balpizgruas.cl",
    siteName: "Balpiz Grúas SPA",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Balpiz Grúas SPA | Arriendo de grúas horquilla",
    description:
      "Arriendo de grúas horquilla para minería, industria y construcción dentro y fuera de Antofagasta.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}