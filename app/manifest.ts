import type { MetadataRoute } from "next";
const {
  default: { basePath },
} = await import("../next.config.mjs");

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: "Ankihon",
    name: "Ankihon: Master Japanese, One Flashcard at a Time!",
    icons: [
      {
        src: `${basePath}/images/icons-192.png`,
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: `${basePath}/images/icons-512.png`,
        type: "image/png",
        sizes: "512x512",
      },
    ],
    id: "/?source=pwa",
    start_url: `${basePath}/main/learn`,
    background_color: "#E3DED2",
    display: "standalone",
    scope: "/",
    theme_color: "#E3DED2",
    shortcuts: [
      {
        name: "How's the weather today?",
        short_name: "Today",
        description: "View weather information for today",
        url: "/today?source=pwa",
        icons: [{ src: `${basePath}/images/plus.png`, sizes: "192x192" }],
      },
    ],
    description: "Master Japanese, One Flashcard at a Time!",
    screenshots: [],
  };
}
