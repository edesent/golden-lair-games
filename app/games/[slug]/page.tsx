import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Check, MapPin, PackageCheck } from "lucide-react";
import { games, getGame } from "../games-data";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) {
    return { title: "Game not found" };
  }
  const title = `${game.name} in Lapeer & Grand Blanc, MI`;
  return {
    title,
    description: game.metaDescription,
    alternates: { canonical: `/games/${game.slug}` },
    openGraph: {
      title: `${title} | Golden Lair Games`,
      description: game.metaDescription,
      url: `https://goldenlairgames.com/games/${game.slug}`,
      type: "website"
    }
  };
}

export default async function GamePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) {
    notFound();
  }

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://goldenlairgames.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Games We Carry",
        item: "https://goldenlairgames.com/games"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: game.name,
        item: `https://goldenlairgames.com/games/${game.slug}`
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Golden Lair Games home">
          <span>Golden Lair Games</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/games">All Games</Link>
          <Link href="/#events">Events</Link>
          <Link href="/#locations">Find Store</Link>
        </nav>
      </header>

      <section className={`section game-hero accent-${game.color}`}>
        <p className="eyebrow">Games we carry</p>
        <h1>{game.name}</h1>
        <p className="hero-copy">{game.tagline}</p>
        <div className="hero-actions">
          <Link className="button primary" href="/#locations">
            <MapPin aria-hidden="true" />
            Visit a store
          </Link>
          <Link className="button secondary" href="/games">
            See all games
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>About {game.name}</h2>
        </div>
        {game.intro.map((paragraph) => (
          <p className="game-paragraph" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">In stock</p>
          <h2>What we carry</h2>
        </div>
        <ul className="game-carry">
          {game.carry.map((item) => (
            <li key={item}>
              <PackageCheck aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {game.events.length > 0 && (
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Weekly play</p>
            <h2>{game.name} events</h2>
          </div>
          <ul className={`game-events accent-${game.color}`}>
            {game.events.map((event) => (
              <li key={`${event.day}-${event.time}-${event.title}`}>
                <CalendarDays aria-hidden="true" />
                <span className="game-event-day">{event.day}</span>
                <strong>{event.time}</strong>
                <em>{event.title}</em>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="section game-cta">
        <h2>Come play at Golden Lair Games</h2>
        <p className="game-paragraph">
          Find us in Lapeer or Grand Blanc, Michigan. New players are always
          welcome — stop in, grab a table, and join the community.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/#locations">
            <MapPin aria-hidden="true" />
            Get directions
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <p>
          <Link href="/games">
            <Check aria-hidden="true" /> Browse all games we carry
          </Link>
        </p>
      </footer>
    </main>
  );
}
