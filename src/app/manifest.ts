import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LÚMINA STUDIO — Cuernavaca",
    short_name: "LÚMINA",
    description: "Estudio de belleza contemporáneo en Cuernavaca, Morelos — reserva tu cita",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFCF8",
    theme_color: "#1A1A17",
    orientation: "portrait",
    lang: "es-MX",
    categories: ["beauty", "lifestyle"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
