import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://goldenlairgames.com"),
  title: {
    default: "Golden Lair Games | Trading Card Store in Lapeer, MI",
    template: "%s | Golden Lair Games"
  },
  description:
    "Golden Lair Games is a collectible trading card game store and play center in Lapeer, MI for Magic: The Gathering, Pokemon, Lorcana, Riftbound, Flesh and Blood, and Dungeons & Dragons.",
  openGraph: {
    title: "Golden Lair Games",
    description:
      "Collectible trading card game store and play center in Lapeer, Michigan.",
    url: "https://goldenlairgames.com",
    siteName: "Golden Lair Games",
    images: [
      {
        url: "/images/storefront-products.jpg",
        width: 1024,
        height: 485,
        alt: "Golden Lair Games trading card products and accessories"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
