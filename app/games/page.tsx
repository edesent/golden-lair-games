import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { games } from "./games-data";

export const metadata: Metadata = {
  title: "Games We Carry — TCGs & Tabletop in Lapeer & Grand Blanc, MI",
  description:
    "Browse the trading card games and tabletop products at Golden Lair Games in Lapeer & Grand Blanc, MI: Magic: The Gathering, Pokemon, Disney Lorcana, Riftbound, Flesh and Blood, and Dungeons & Dragons.",
  alternates: { canonical: "/games" }
};

export default function GamesIndexPage() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Golden Lair Games home">
          <span>Golden Lair Games</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#events">Events</Link>
          <Link href="/#hours">Hours</Link>
          <Link href="/#locations">Find Store</Link>
        </nav>
      </header>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Games we carry</p>
          <h1>Trading card games &amp; tabletop, in stock and in play</h1>
          <p className="hero-copy">
            Singles, sealed product, accessories, and weekly organized play for
            every game on our tables. Pick a game to see what we carry and when
            we play.
          </p>
        </div>
        <div className="games-grid">
          {games.map((game) => (
            <Link
              className={`game-tile accent-${game.color}`}
              href={`/games/${game.slug}`}
              key={game.slug}
            >
              <h2>{game.name}</h2>
              <p>{game.tagline}</p>
              <span className="game-tile-link">
                Learn more <ArrowRight aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
