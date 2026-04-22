import { Moon, Sparkles } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import type { Card } from "./cardData";
import {
  getRandomCard,
  getRarityBgColor,
  getRarityColor,
  getRarityGlowClass,
} from "./cardData";

interface GachaPanelProps {
  onCardDrawn: (card: Card) => void;
  isDrawing: boolean;
}

export default function GachaPanel({
  onCardDrawn,
  isDrawing,
}: GachaPanelProps) {
  const [drawnCard, setDrawnCard] = useState<Card | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showLore, setShowLore] = useState(false);

  const handleDraw = () => {
    setIsFlipping(true);
    setShowLore(false);
    setDrawnCard(null);

    window.setTimeout(() => {
      const newCard = getRandomCard();
      setDrawnCard(newCard);
      onCardDrawn(newCard);
    }, 300);

    window.setTimeout(() => {
      setIsFlipping(false);
      setShowLore(true);
    }, 750);
  };

  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center animate-section-fade-up">
          <h2 className="mb-4 text-5xl font-bold text-amber-50 md:text-6xl">
            Draw a Card
          </h2>
          <p className="text-lg text-amber-100/70">
            Reveal a celestial tale from the Marble Moon
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className="relative mb-8 h-72 w-48">
              <div className="absolute inset-0 flex items-center justify-center">
                {[2, 1, 0].map((idx) => (
                  <div
                    key={idx}
                    className={`marble-texture absolute h-64 w-40 rounded-lg border-2 border-amber-700/60 bg-gradient-to-br from-slate-800 to-slate-900 transition-all duration-300 ${
                      isFlipping && idx === 0 ? "animate-card-rise" : ""
                    } ${isFlipping && idx > 0 ? "animate-pulse" : ""}`}
                    style={{
                      transform: `translateY(${idx * 8}px) translateX(${idx * 4}px) scale(${1 - idx * 0.02})`,
                      zIndex: 10 - idx,
                    }}
                  >
                    <div className="flex h-full w-full items-center justify-center text-amber-700/30">
                      <Moon size={48} className="animate-moon-spin" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={handleDraw}
              disabled={isDrawing || isFlipping}
              className="px-8 py-6 text-lg font-bold"
            >
              <Sparkles size={20} />
              {isDrawing || isFlipping ? "Drawing..." : "Draw a Card"}
            </Button>
          </div>

          <div className="flex flex-1 flex-col items-center">
            {drawnCard ? (
              <div
                className={`w-full max-w-xs animate-card-rise ${getRarityGlowClass(drawnCard.rarity)}`}
              >
                <div
                  className={`card-hover relative overflow-hidden rounded-lg border-2 ${getRarityBgColor(drawnCard.rarity)} transition-all duration-300 ${isFlipping ? "animate-card-flip" : ""}`}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
                    <img
                      src={drawnCard.artwork}
                      alt={drawnCard.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="arch-frame absolute left-0 right-0 top-0 h-12 rounded-t-3xl border-l-2 border-r-2 border-t-2 border-amber-600/40" />
                  </div>

                  <div className="border-t border-amber-700/30 bg-slate-950/80 p-4">
                    <h3 className="mb-2 text-xl font-bold text-amber-50">
                      {drawnCard.name}
                    </h3>
                    <div
                      className={`mb-3 inline-block rounded border px-2 py-1 text-xs font-bold ${getRarityBgColor(drawnCard.rarity)} ${getRarityColor(drawnCard.rarity)}`}
                    >
                      {drawnCard.rarity.toUpperCase()}
                    </div>
                    {showLore ? (
                      <p className="animate-fade-in-up line-clamp-3 text-sm text-amber-100/70">
                        {drawnCard.shortLore}
                      </p>
                    ) : null}
                  </div>

                  <div
                    className={`animate-shimmer absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold ${getRarityBgColor(drawnCard.rarity)} ${getRarityColor(drawnCard.rarity)}`}
                  >
                    {drawnCard.rarity[0].toUpperCase()}
                  </div>
                </div>

                {showLore ? (
                  <div className="mt-6 flex gap-3 animate-fade-in-up">
                    <Button
                      onClick={handleDraw}
                      variant="outline"
                      className="flex-1 rounded-full"
                    >
                      Draw Again
                    </Button>
                    <Button
                      disabled
                      variant="ghost"
                      className="flex-1 rounded-full border border-amber-700/30 bg-slate-950/40"
                    >
                      Added to Gallery
                    </Button>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="flex h-96 w-full max-w-xs items-center justify-center rounded-lg border-2 border-dashed border-amber-700/30 text-amber-100/50">
                <div className="text-center">
                  <Moon size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Draw a card to reveal its tale</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
