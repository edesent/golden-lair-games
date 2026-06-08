import type { Metadata } from "next";
import "./globals.css";

const siteDescription =
  "Golden Lair Games is a collectible trading card game store and play center in Lapeer and Grand Blanc, Michigan for Magic: The Gathering, Pokemon, Disney Lorcana, Riftbound, Flesh and Blood, and Dungeons & Dragons. Weekly events, tournaments, open play, singles, and sealed product.";

export const metadata: Metadata = {
  metadataBase: new URL("https://goldenlairgames.com"),
  title: {
    default: "Golden Lair Games | Trading Card Game Store in Lapeer & Grand Blanc, MI",
    template: "%s | Golden Lair Games"
  },
  description: siteDescription,
  applicationName: "Golden Lair Games",
  keywords: [
    "Golden Lair Games",
    "trading card store",
    "card shop Lapeer MI",
    "card shop Grand Blanc MI",
    "Magic: The Gathering Lapeer",
    "Pokemon TCG Michigan",
    "Disney Lorcana",
    "Riftbound",
    "Flesh and Blood",
    "Dungeons & Dragons",
    "TCG tournaments",
    "Friday Night Magic",
    "game store near me",
    "Lapeer Michigan",
    "Grand Blanc Michigan"
  ],
  authors: [{ name: "Golden Lair Games" }],
  creator: "Golden Lair Games",
  publisher: "Golden Lair Games",
  category: "Hobby & Game Store",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Golden Lair Games | Trading Card Game Store in Lapeer & Grand Blanc, MI",
    description: siteDescription,
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Lair Games | Trading Card Game Store in Lapeer & Grand Blanc, MI",
    description: siteDescription,
    images: ["/images/storefront-products.jpg"]
  },
  icons: {
    icon: "/images/golden-lair-logo.png",
    apple: "/images/golden-lair-logo.png"
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://goldenlairgames.com/#organization",
      name: "Golden Lair Games",
      url: "https://goldenlairgames.com",
      logo: "https://goldenlairgames.com/images/golden-lair-logo.png",
      sameAs: ["https://www.facebook.com/profile.php?id=61578127423240"]
    },
    {
      "@type": "WebSite",
      "@id": "https://goldenlairgames.com/#website",
      url: "https://goldenlairgames.com",
      name: "Golden Lair Games",
      description: siteDescription,
      publisher: { "@id": "https://goldenlairgames.com/#organization" }
    },
    {
      "@type": "Store",
      "@id": "https://goldenlairgames.com/#lapeer",
      name: "Golden Lair Games Lapeer",
      image: "https://goldenlairgames.com/images/storefront-products.jpg",
      url: "https://goldenlairgames.com/#locations",
      telephone: "+1-810-660-7135",
      priceRange: "$$",
      parentOrganization: { "@id": "https://goldenlairgames.com/#organization" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "1807 W Genesee St",
        addressLocality: "Lapeer",
        addressRegion: "MI",
        postalCode: "48446",
        addressCountry: "US"
      },
      geo: { "@type": "GeoCoordinates", latitude: 43.0509, longitude: -83.3279 },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "14:00",
          closes: "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "12:00",
          closes: "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "12:00",
          closes: "20:00"
        }
      ]
    },
    {
      "@type": "Store",
      "@id": "https://goldenlairgames.com/#grand-blanc",
      name: "Golden Lair Games Grand Blanc",
      image: "https://goldenlairgames.com/images/grand-blanc-sign.jpg",
      url: "https://goldenlairgames.com/#locations",
      telephone: "+1-810-344-9375",
      priceRange: "$$",
      parentOrganization: { "@id": "https://goldenlairgames.com/#organization" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "6309 Dort Hwy",
        addressLocality: "Grand Blanc",
        addressRegion: "MI",
        postalCode: "48439",
        addressCountry: "US"
      },
      geo: { "@type": "GeoCoordinates", latitude: 42.9456, longitude: -83.6574 }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
