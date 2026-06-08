export type GameEvent = {
  day: string;
  time: string;
  title: string;
};

export type Game = {
  slug: string;
  name: string;
  /** Per-game accent color key, matches CSS variables used on the homepage. */
  color: string;
  /** Short tagline used in cards and meta descriptions. */
  tagline: string;
  /** SEO meta description (~150-160 chars). */
  metaDescription: string;
  /** Intro paragraphs for the product page. */
  intro: string[];
  /** What the store stocks for this game. */
  carry: string[];
  /** Weekly in-store events for this game. */
  events: GameEvent[];
};

export const games: Game[] = [
  {
    slug: "magic-the-gathering",
    name: "Magic: The Gathering",
    color: "amber",
    tagline: "Standard, Commander, Draft, and weekly tournaments.",
    metaDescription:
      "Magic: The Gathering at Golden Lair Games in Lapeer & Grand Blanc, MI. Singles, sealed product, and weekly events — Commander, Draft, Standard, and tournaments.",
    intro: [
      "Magic: The Gathering is the original collectible card game, where players build decks from thousands of unique cards and battle as rival planeswalkers. Whether you grind Standard, brew Commander, or crack packs in a Draft, Golden Lair Games is your table.",
      "We stock current sets, singles for your next deck, and sealed product for collectors and players alike — and we run organized play every week for new and competitive players."
    ],
    carry: [
      "Booster boxes, bundles, and the latest set releases",
      "Single cards for Standard, Pioneer, Modern, and Commander",
      "Commander precons, deck boxes, sleeves, and play accessories"
    ],
    events: [
      { day: "Tuesday", time: "6:30 PM", title: "2HG Commander" },
      { day: "Thursday", time: "6:30 PM", title: "Draft" },
      { day: "Friday", time: "6:30 PM", title: "Standard" },
      { day: "Saturday", time: "Noon-10 PM", title: "Commander Free Play" },
      { day: "Saturday", time: "3 PM", title: "Commander Tournament" }
    ]
  },
  {
    slug: "pokemon",
    name: "Pokemon",
    color: "blue",
    tagline: "The Pokemon Trading Card Game for collectors and players.",
    metaDescription:
      "Pokemon TCG at Golden Lair Games in Lapeer & Grand Blanc, MI. Booster packs, single cards, sealed product, and weekly Pokemon play events for all ages.",
    intro: [
      "The Pokemon Trading Card Game is one of the most popular and family-friendly card games in the world. Collect your favorite Pokemon, build a deck, and battle — it is easy to learn and rewarding to master.",
      "Golden Lair Games carries the latest Pokemon sets and singles, and hosts a weekly play event that welcomes kids, families, and longtime collectors."
    ],
    carry: [
      "Booster packs, boxes, elite trainer boxes, and tins",
      "Single cards and chase cards for collectors",
      "Deck-building supplies, sleeves, and binders"
    ],
    events: [{ day: "Sunday", time: "5 PM", title: "Play Event" }]
  },
  {
    slug: "lorcana",
    name: "Disney Lorcana",
    color: "violet",
    tagline: "Disney's hit TCG — Core Constructed twice a week.",
    metaDescription:
      "Disney Lorcana at Golden Lair Games in Lapeer & Grand Blanc, MI. Sealed product, singles, and weekly Core Constructed events for Disney's trading card game.",
    intro: [
      "Disney Lorcana is the fast-growing trading card game where players become Illumineers, summoning beloved Disney characters as glimmering ink creatures to outwit their opponents.",
      "We carry Lorcana sets and singles and run Core Constructed play twice a week — a great entry point whether you are new to TCGs or a seasoned player."
    ],
    carry: [
      "Booster packs, boxes, starter decks, and gift sets",
      "Single cards and enchanted-rarity chase cards",
      "Sleeves, deck boxes, and play accessories"
    ],
    events: [
      { day: "Sunday", time: "12:30 PM", title: "Core Constructed" },
      { day: "Monday", time: "6:30 PM", title: "Core Constructed" }
    ]
  },
  {
    slug: "riftbound",
    name: "Riftbound",
    color: "orange",
    tagline: "The League of Legends TCG — Nexus Nights weekly.",
    metaDescription:
      "Riftbound, the League of Legends TCG, at Golden Lair Games in Lapeer & Grand Blanc, MI. Sealed product, singles, and weekly Nexus Nights play.",
    intro: [
      "Riftbound is the League of Legends trading card game, bringing champions from the Rift to the tabletop in fast, strategic battles for control of the board.",
      "Golden Lair Games stocks Riftbound product and hosts Nexus Nights every week — come learn the game or sharpen your lineup against the local community."
    ],
    carry: [
      "Booster packs, boxes, and starter product",
      "Single cards for deck building",
      "Sleeves and play accessories"
    ],
    events: [{ day: "Monday", time: "6:30 PM", title: "Nexus Nights" }]
  },
  {
    slug: "flesh-and-blood",
    name: "Flesh and Blood",
    color: "silver",
    tagline: "Hero-driven combat — Silver Age and Armory events.",
    metaDescription:
      "Flesh and Blood TCG at Golden Lair Games in Lapeer & Grand Blanc, MI. Sealed product, singles, and weekly Silver Age and Armory Constructed events.",
    intro: [
      "Flesh and Blood is a trading card game built for in-store play, where each player takes on the role of a hero in tense, skill-driven combat with no resource cards to draw dead.",
      "We carry Flesh and Blood sets and singles and run weekly Silver Age and Armory Constructed events for new heroes and veterans alike."
    ],
    carry: [
      "Booster boxes, blitz decks, and the latest sets",
      "Single cards for Classic Constructed and Blitz",
      "Sleeves, deck boxes, and accessories"
    ],
    events: [
      { day: "Wednesday", time: "6 PM", title: "Silver Age" },
      { day: "Thursday", time: "6:30 PM", title: "Armory CC" }
    ]
  },
  {
    slug: "dungeons-and-dragons",
    name: "Dungeons & Dragons",
    color: "red",
    tagline: "The classic tabletop RPG — weekly in-store play.",
    metaDescription:
      "Dungeons & Dragons at Golden Lair Games in Lapeer & Grand Blanc, MI. Rulebooks, dice, minis, accessories, and weekly in-store D&D play.",
    intro: [
      "Dungeons & Dragons is the legendary tabletop roleplaying game where a group of players and a Dungeon Master tell a shared story of adventure, combat, and exploration.",
      "Golden Lair Games is a welcoming place to roll dice — we carry the books and accessories you need and host weekly in-store play for new and experienced adventurers."
    ],
    carry: [
      "Core rulebooks, adventure modules, and accessories",
      "Dice sets, dice trays, and DM screens",
      "Miniatures, battle maps, and play supplies"
    ],
    events: [{ day: "Wednesday", time: "6:30 PM", title: "In-Store Play" }]
  }
];

export function getGame(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}
