import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GestorAfiliados - Administración de Edificios",
  description: "Plataforma SaaS para gestión de cartera y afiliados en edificios, clubes y fondos de empleados. Mobile-first, ágil y simple.",
  keywords: ["administración", "edificios", "PH", "cobranza", "afiliados", "Colombia"],
  authors: [{ name: "GestorAfiliados" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#3b82f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

