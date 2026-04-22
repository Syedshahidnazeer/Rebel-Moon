export type CardRarity = "common" | "rare" | "mythic";

export interface Card {
  id: string;
  name: string;
  rarity: CardRarity;
  shortLore: string;
  fullLore: string;
  artwork: string;
  realm: string;
  element: string;
  era: string;
  tags: string[];
}

export const CARD_COLLECTION: Card[] = [
  {
    id: "guardian-yamuna",
    name: "Guardian of the Yamuna Veil",
    rarity: "rare",
    shortLore:
      "A celestial guardian watches over the sacred river, wings of starlight protecting the marble realm.",
    fullLore:
      "In the depths of night, when moonlight touches the Yamuna, a guardian spirit emerges from the mist. Adorned in robes of deep blue and gold, with a crescent halo blazing above her brow, she stands eternal on the marble terrace. Her gaze holds the wisdom of ages, watching over the river that flows beneath the Taj Mahal. Some say she was born from the first tear shed in love, crystallized into this ethereal form. Those who glimpse her are blessed with clarity and purpose.",
    artwork:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663586645388/EWBWg5ijXtjsU9uveXqWdE/card-guardian-yamuna-6fLGEtixZextikyh3LL2pG.webp",
    realm: "Midnight Garden",
    element: "Air & Water",
    era: "Shah Jahan's Reverie",
    tags: ["Guardian", "Celestial", "Protective"],
  },
  {
    id: "celestial-garden",
    name: "The Celestial Garden",
    rarity: "mythic",
    shortLore:
      "A legendary garden where marble pavilions reflect starlight and geometric patterns glow with ancient magic.",
    fullLore:
      "Beyond the veil of ordinary sight lies the Celestial Garden - a realm where the Taj Mahal's architecture transcends stone and becomes pure light. White marble pavilions float above still pools, their reflections infinite and ever-shifting. Intricate geometric and floral inlay patterns glow with soft gold, each line a prayer carved into eternity. Minarets reach toward a sky filled with stars, and soft moonlight bathes everything in reverence. This is where dreams of emperors become tangible, where love is architecture, and architecture is love eternal.",
    artwork:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663586645388/EWBWg5ijXtjsU9uveXqWdE/card-garden-celestial-d72YcCSXwTQjdvDuLbzG9h.webp",
    realm: "Eternal Pavilion",
    element: "Light & Geometry",
    era: "Timeless",
    tags: ["Mythical", "Sacred", "Architectural"],
  },
  {
    id: "river-spirit",
    name: "Spirit of the Sacred Waters",
    rarity: "rare",
    shortLore:
      "An ethereal being of flowing water and mist, adorned with pearls and sapphires, dancing in moonlight.",
    fullLore:
      "The Yamuna's soul takes form in the depths of night - a spirit woven from water, mist, and starlight. Her translucent form flows like silk, adorned with jewelry of pearls and sapphires that catch the moon's glow. Around her, lotus flowers drift in an eternal dance, while geometric Islamic patterns shimmer in the water beneath her feet. She is both the river and the reflection, both the question and the answer. To encounter her is to understand the language of flowing water and the secrets whispered between earth and sky.",
    artwork:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663586645388/EWBWg5ijXtjsU9uveXqWdE/card-river-spirit-dNM5wJfE97JjQNHuuNwhyY.webp",
    realm: "Yamuna's Embrace",
    element: "Water & Mist",
    era: "Eternal Flow",
    tags: ["Spirit", "Aquatic", "Mystical"],
  },
  {
    id: "calligraphy-guardian",
    name: "The Calligraphy Guardian",
    rarity: "mythic",
    shortLore:
      "A mystical being composed entirely of glowing Islamic script, embodying the written word made flesh.",
    fullLore:
      "In the marble halls of the celestial realm stands a guardian unlike any other - a being woven entirely from the golden threads of calligraphy. Every curve and flourish forms their body, each letter a prayer, each word a spell of protection. Their helm is crowned with geometric patterns that spin slowly, releasing stars into the void. Within their chest, a light burns eternal - the light of knowledge, of divine words, of the sacred language that built empires. They are the keeper of names, the guardian of meaning, the embodiment of beauty through form.",
    artwork:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663586645388/EWBWg5ijXtjsU9uveXqWdE/card-calligraphy-guardian-2oaMgxMG9b62EehK8MN6WN.webp",
    realm: "Chamber of Words",
    element: "Script & Light",
    era: "Age of Illumination",
    tags: ["Guardian", "Mystical", "Sacred"],
  },
  {
    id: "midnight-dome",
    name: "Keeper of the Midnight Dome",
    rarity: "common",
    shortLore:
      "A silent sentinel watching over the marble dome as stars wheel overhead through endless nights.",
    fullLore:
      "Beneath the great dome of the Taj Mahal, a presence keeps eternal vigil. This keeper is neither seen nor heard, yet felt in every shadow and every whisper of wind. They have watched emperors rise and fall, lovers come to mourn, and the seasons turn their endless wheel. In the silence of midnight, when the dome glows with reflected starlight, the keeper's purpose is fulfilled. They ask nothing and demand nothing - only to remain, to witness, and to preserve the sanctity of this sacred place.",
    artwork:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663586645388/EWBWg5ijXtjsU9uveXqWdE/hero-taj-midnight-MBuAYGQajjzQEEhTx2DZzq.webp",
    realm: "Marble Sanctuary",
    element: "Stone & Starlight",
    era: "Eternal Vigil",
    tags: ["Sentinel", "Protective", "Ancient"],
  },
];

export function getCardById(id: string): Card | undefined {
  return CARD_COLLECTION.find((card) => card.id === id);
}

export function getCardsByRarity(rarity: CardRarity): Card[] {
  return CARD_COLLECTION.filter((card) => card.rarity === rarity);
}

export function getRandomCard(): Card {
  return CARD_COLLECTION[Math.floor(Math.random() * CARD_COLLECTION.length)];
}

export function getRarityColor(rarity: CardRarity): string {
  switch (rarity) {
    case "common":
      return "text-amber-200";
    case "rare":
      return "text-emerald-400";
    case "mythic":
      return "text-violet-400";
    default:
      return "text-gray-300";
  }
}

export function getRarityBgColor(rarity: CardRarity): string {
  switch (rarity) {
    case "common":
      return "bg-amber-950/40 border-amber-700/60";
    case "rare":
      return "bg-emerald-950/40 border-emerald-700/60";
    case "mythic":
      return "bg-violet-950/40 border-violet-700/60";
    default:
      return "bg-slate-900/40 border-slate-700/60";
  }
}

export function getRarityGlowClass(rarity: CardRarity): string {
  switch (rarity) {
    case "common":
      return "";
    case "rare":
      return "glow-halo-rare";
    case "mythic":
      return "glow-halo-mythic";
    default:
      return "";
  }
}
