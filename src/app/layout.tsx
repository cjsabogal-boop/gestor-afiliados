import type { Metadata, Viewport } from "next";
import { Outfit, Sora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "900"],
});

const sora = Sora({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "AfiliadosOS - Super App para Sector Solidario",
  description: "Plataforma SaaS nivel Monstruo para Fondos de Empleados, Cooperativas, Sindicatos y Asociaciones. IA transaccional, Banca Abierta y Gamificación.",
  keywords: ["fondos de empleados", "cooperativas", "asociaciones", "fintech", "solidario", "Colombia", "SaaS", "Gestión"],
  authors: [{ name: "AfiliadosOS" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

