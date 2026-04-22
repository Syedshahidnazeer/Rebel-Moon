import { X } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import type { Card, CardRarity } from "./cardData";
import {
  CARD_COLLECTION,
  getRarityBgColor,
  getRarityColor,
  getRarityGlowClass,
} from "./cardData";

interface CardGalleryProps {
  unlockedCards: string[];
}

export default function CardGallery({ unlockedCards }: CardGalleryProps) {
  const [selectedRarity, setSelectedRarity] = useState<CardRarity | "all">("all");
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const rarityOptions: (CardRarity | "all")[] = [
    "all",
    "common",
    "rare",
    "mythic",
  ];

  const filteredCards = CARD_COLLECTION.filter((card) => {
    const isUnlocked = unlockedCards.includes(card.id);
    const rarityMatch =
      selectedRarity === "all" || card.rarity === selectedRarity;

    return isUnlocked && rarityMatch;
  });

  return (
    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center animate-section-fade-up">
          <h2 className="mb-4 text-5xl font-bold text-amber-50 md:text-6xl">
            Your Bestiary
          </h2>
          <p className="text-lg text-amber-100/70">
            {unlockedCards.length} of {CARD_COLLECTION.length} cards collected
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {rarityOptions.map((rarity) => (
            <Button
              key={rarity}
              onClick={() => setSelectedRarity(rarity)}
              variant={selectedRarity === rarity ? "default" : "outline"}
              className="capitalize"
            >
              {rarity === "all" ? "All Cards" : rarity}
            </Button>
          ))}
        </div>

        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCards.map((card, idx) => (
              <div
                key={card.id}
                className={`group animate-fade-in-up cursor-pointer transition-all duration-300 ${getRarityGlowClass(card.rarity)}`}
                style={{ animationDelay: `${idx * 50}ms` }}
                onClick={() => setSelectedCard(card)}
              >
                <div
                  className={`relative overflow-hidden rounded-lg border-2 ${getRarityBgColor(card.rarity)} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-slate-900">
                    <img
                      src={card.artwork}
                      alt={card.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="line-clamp-2 text-sm font-bold text-amber-50">
                      {card.name}
                    </h3>
                    <p className={`text-xs font-semibold ${getRarityColor(card.rarity)}`}>
                      {card.rarity.toUpperCase()}
                    </p>
                  </div>

                  <div
                    className={`absolute right-2 top-2 rounded border px-2 py-1 text-xs font-bold ${getRarityBgColor(card.rarity)} ${getRarityColor(card.rarity)}`}
                  >
                    {card.rarity[0].toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-amber-100/50">
              No cards found. Draw more cards to expand your collection.
            </p>
          </div>
        )}

        {selectedCard ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in-up"
            onClick={() => setSelectedCard(null)}
          >
            <div
              className="marble-texture max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-amber-700/50 bg-slate-900"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="sticky top-0 flex justify-end border-b border-amber-700/30 bg-slate-950/70 p-4">
                <button
                  type="button"
                  onClick={() => setSelectedCard(null)}
                  className="transition-colors hover:text-amber-50"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-6 overflow-hidden rounded-lg border-2 border-amber-700/40">
                  <img
                    src={selectedCard.artwork}
                    alt={selectedCard.name}
                    className="h-auto w-full"
                  />
                </div>

                <div className="mb-6">
                  <h2 className="mb-2 text-4xl font-bold text-amber-50">
                    {selectedCard.name}
                  </h2>
                  <div
                    className={`inline-block rounded-full border px-3 py-1 text-sm font-bold ${getRarityBgColor(selectedCard.rarity)} ${getRarityColor(selectedCard.rarity)}`}
                  >
                    {selectedCard.rarity.toUpperCase()}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="small-caps mb-3 text-sm font-semibold text-amber-300">
                    Lore
                  </h3>
                  <p className="lore-text leading-relaxed text-amber-50/80">
                    {selectedCard.fullLore}
                  </p>
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4 rounded-lg border border-amber-700/30 bg-slate-800/50 p-4">
                  <div>
                    <p className="small-caps mb-1 text-xs text-amber-300">Realm</p>
                    <p className="text-sm font-semibold text-amber-50">
                      {selectedCard.realm}
                    </p>
                  </div>
                  <div>
                    <p className="small-caps mb-1 text-xs text-amber-300">
                      Element
                    </p>
                    <p className="text-sm font-semibold text-amber-50">
                      {selectedCard.element}
                    </p>
                  </div>
                  <div>
                    <p className="small-caps mb-1 text-xs text-amber-300">Era</p>
                    <p className="text-sm font-semibold text-amber-50">
                      {selectedCard.era}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedCard.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-amber-700/50 bg-amber-900/40 px-3 py-1 text-xs text-amber-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
