import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";
import SWRegister from "@/components/SWRegister";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LÚMINA STUDIO — Tu tiempo también merece atención | Cuernavaca",
  description:
    "Estudio de belleza contemporáneo en Cuernavaca, Morelos. Corte, color, tratamiento y cuidado personal con atención profesional y experiencias a medida. Av. Teopanzolco 408, Reforma. Reserva tu cita.",
  manifest: "/manifest.webmanifest",
  metadataBase: new URL("https://luminacuernavaca.mx"),
  alternates: { canonical: "/" },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LÚMINA",
  },
  openGraph: {
    title: "LÚMINA STUDIO — Cuernavaca",
    description: "Un estudio de belleza contemporáneo en Cuernavaca. Experiencias personalizadas, sin prisa.",
    type: "website",
    locale: "es_MX",
    siteName: "Lúmina Studio Cuernavaca",
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/icon-192.png",
  },
  keywords: ["salón de belleza Cuernavaca", "estética Cuernavaca", "corte cabello Cuernavaca", "balayage Morelos", "uñas Cuernavaca"],
};

export const viewport: Viewport = {
  themeColor: "#FFFBF5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${fraunces.variable} ${dmSans.variable} ${bricolage.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[var(--paper)] text-[var(--ink)]" suppressHydrationWarning>
        <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-[var(--brown)] focus:text-white focus:px-4 focus:py-2 text-sm">
          Saltar al contenido
        </a>
        <NavigationWrapper />
        <main id="contenido" className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <JsonLd />
        <SWRegister />
      </body>
    </html>
  );
}
