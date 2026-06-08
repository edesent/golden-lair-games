import Image from "next/image";
import {
  CalendarDays,
  Clock,
  ExternalLink,
  Facebook,
  Github,
  MapPin,
  PackageCheck,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy
} from "lucide-react";
import Link from "next/link";
import { LocationFinder } from "./components/LocationFinder";
import { games as gameProducts } from "./games/games-data";

const facebookUrl = "https://www.facebook.com/profile.php?id=61578127423240";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=1807%20W%20Genesee%20St%20Lapeer%20MI%2048446";
const phoneUrl = "tel:+18106607135";
const githubUrl = "https://github.com/edesent/golden-lair-games";
const vercelUrl = "https://goldenlairgames.vercel.app";

const navItems = [
  ["Games", "/games"],
  ["Events", "#events"],
  ["Hours", "#hours"],
  ["Cards", "#cards"],
  ["Find Store", "#locations"]
];

const schedule = [
  {
    game: "Magic: The Gathering",
    color: "amber",
    events: [
      ["Tuesday", "6:30 PM", "2HG Commander"],
      ["Thursday", "6:30 PM", "Draft"],
      ["Friday", "6:30 PM", "Standard"],
      ["Saturday", "Noon-10 PM", "Commander Free Play"],
      ["Saturday", "3 PM", "Commander Tournament"]
    ]
  },
  {
    game: "Lorcana",
    color: "violet",
    events: [
      ["Sunday", "12:30 PM", "Core Constructed"],
      ["Monday", "6:30 PM", "Core Constructed"]
    ]
  },
  {
    game: "Pokemon",
    color: "blue",
    events: [["Sunday", "5 PM", "Play Event"]]
  },
  {
    game: "Riftbound",
    color: "orange",
    events: [["Monday", "6:30 PM", "Nexus Nights"]]
  },
  {
    game: "Flesh and Blood",
    color: "silver",
    events: [
      ["Wednesday", "6 PM", "Silver Age"],
      ["Thursday", "6:30 PM", "Armory CC"]
    ]
  },
  {
    game: "Dungeons & Dragons",
    color: "red",
    events: [["Wednesday", "6:30 PM", "In-Store Play"]]
  }
];

const hours = [
  ["Monday-Friday", "2 PM-10 PM"],
  ["Saturday", "Noon-10 PM"],
  ["Sunday", "Noon-8 PM"]
];

const features = [
  {
    icon: Trophy,
    title: "Weekly Organized Play",
    text: "Regular events for competitive players, collectors, and people just looking for a steady table."
  },
  {
    icon: ShieldCheck,
    title: "Welcoming Play Space",
    text: "A clean, friendly store environment built around safe games, good sportsmanship, and repeat visits."
  },
  {
    icon: PackageCheck,
    title: "Cards, Sealed, Accessories",
    text: "Browse trading card products, deck supplies, and the essentials for your next league night or tournament."
  }
];

const cardSteps = [
  "Bring in singles, sealed product, or collections.",
  "The team reviews condition, demand, and current inventory needs.",
  "Choose store credit or cash when an offer is available."
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Golden Lair Games home">
          <Image
            src="/images/golden-lair-logo.png"
            alt="Golden Lair Games"
            width={96}
            height={64}
            priority
          />
          <span>Golden Lair Games</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero">
        <div className="hero-media">
          <Image
            src="/images/storefront-products.jpg"
            alt="Trading card products on shelves at Golden Lair Games"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Collectible trading card store and play center</p>
          <h1>Golden Lair Games</h1>
          <p className="hero-copy">
            Lapeer&apos;s home for Magic: The Gathering, Pokemon, Lorcana,
            Riftbound, Flesh and Blood, Dungeons & Dragons, and a table full of
            regulars ready for the next match.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#events">
              <CalendarDays aria-hidden="true" />
              See events
            </a>
            <a className="button secondary" href={mapUrl} target="_blank">
              <MapPin aria-hidden="true" />
              Get directions
            </a>
          </div>
        </div>
        <Image
          className="hero-logo"
          src="/images/golden-lair-logo.png"
          alt=""
          width={420}
          height={280}
          priority
        />
      </section>

      <section className="quick-info" aria-label="Store highlights">
        <div>
          <Clock aria-hidden="true" />
          <span>Open 7 days a week</span>
        </div>
        <div>
          <MapPin aria-hidden="true" />
          <span>Find the nearest Golden Lair location</span>
        </div>
        <div>
          <Phone aria-hidden="true" />
          <span>(810) 660-7135</span>
        </div>
      </section>

      <section className="section intro-section" id="store">
        <div className="section-heading">
          <p className="eyebrow">Inside the lair</p>
          <h2>A polished local hub for cards, play, and community.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <feature.icon aria-hidden="true" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
        <div className="game-strip" aria-label="Supported games">
          {gameProducts.map((game) => (
            <Link key={game.slug} href={`/games/${game.slug}`}>
              {game.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="section gallery-section" aria-label="Store photos">
        <div className="section-heading">
          <p className="eyebrow">Now open in Grand Blanc</p>
          <h2>A second Golden Lair, ready for play.</h2>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-item">
            <Image
              src="/images/grand-blanc-sign.jpg"
              alt="Golden Lair Games storefront sign at the Grand Blanc location"
              width={2048}
              height={1536}
            />
            <figcaption>The new Grand Blanc storefront on Dort Hwy.</figcaption>
          </figure>
          <figure className="gallery-item">
            <Image
              src="/images/store-interior.jpg"
              alt="Inside Golden Lair Games with trading cards and products for sale"
              width={2048}
              height={1536}
            />
            <figcaption>Cards, sealed product, and accessories in store.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section event-section" id="events">
        <div className="section-heading split">
          <div>
            <p className="eyebrow">Weekly schedule</p>
            <h2>Find your next table.</h2>
          </div>
          <a className="button compact" href={facebookUrl} target="_blank">
            <Facebook aria-hidden="true" />
            Facebook updates
          </a>
        </div>
        <div className="schedule-layout">
          <div className="schedule-grid">
            {schedule.map((group) => (
              <article className={`schedule-card accent-${group.color}`} key={group.game}>
                <h3>{group.game}</h3>
                <ul>
                  {group.events.map(([day, time, title]) => (
                    <li key={`${group.game}-${day}-${time}-${title}`}>
                      <span>{day}</span>
                      <strong>{time}</strong>
                      <em>{title}</em>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <figure className="schedule-image">
            <Image
              src="/images/weekly-schedule.jpg"
              alt="Golden Lair Games weekly schedule flyer"
              width={1024}
              height={614}
            />
            <figcaption>Current store flyer preserved from the original site.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section hours-section" id="hours">
        <div className="section-heading">
          <p className="eyebrow">Store hours</p>
          <h2>Built for after-work games and weekend tournaments.</h2>
        </div>
        <div className="hours-board">
          {hours.map(([day, time]) => (
            <div key={day}>
              <span>{day}</span>
              <strong>{time}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section cards-section" id="cards">
        <div className="section-heading">
          <p className="eyebrow">We want your cards</p>
          <h2>Turn collections into store credit or cash offers.</h2>
        </div>
        <div className="cards-panel">
          <div>
            <Sparkles aria-hidden="true" />
            <p>
              Bring in trading card collections, singles, or sealed product and
              the Golden Lair team can review what fits current store needs.
            </p>
          </div>
          <ol>
            {cardSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <a className="button primary" href="#locations">
            <MapPin aria-hidden="true" />
            Bring your cards in
          </a>
        </div>
      </section>

      <section className="section location-section" id="locations">
        <div className="location-copy">
          <p className="eyebrow">Visit us</p>
          <h2>Choose the Golden Lair closest to you.</h2>
          <p>
            Use the finder to compare our Lapeer and Grand Blanc stores, get
            directions, and check store details before game night.
          </p>
          <div className="location-actions">
            <a className="button primary" href={mapUrl} target="_blank">
              <MapPin aria-hidden="true" />
              Lapeer directions
            </a>
            <a className="button secondary" href={phoneUrl}>
              <Phone aria-hidden="true" />
              (810) 660-7135
            </a>
          </div>
        </div>
        <LocationFinder />
      </section>

      <footer className="site-footer">
        <div>
          <Image
            src="/images/golden-lair-logo.png"
            alt="Golden Lair Games"
            width={90}
            height={60}
          />
          <p>Golden Lair Games</p>
        </div>
        <div className="footer-links">
          <a href={facebookUrl} target="_blank">
            <Facebook aria-hidden="true" />
            Facebook
          </a>
          <a href={githubUrl} target="_blank">
            <Github aria-hidden="true" />
            GitHub
          </a>
          <a href={vercelUrl} target="_blank">
            <Rocket aria-hidden="true" />
            Vercel
          </a>
          <a href="https://goldenlairgames.com" target="_blank">
            <ExternalLink aria-hidden="true" />
            Original site
          </a>
        </div>
      </footer>
    </main>
  );
}
