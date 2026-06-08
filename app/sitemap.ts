import type { MetadataRoute } from "next";
import { games } from "./games/games-data";

const baseUrl = "https://goldenlairgames.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const gamePages: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${baseUrl}/games/${game.slug}`,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/games`,
      changeFrequency: "monthly",
      priority: 0.9
    },
    ...gamePages
  ];
}
