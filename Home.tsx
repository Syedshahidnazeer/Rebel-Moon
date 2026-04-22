import { useEffect, useRef, useState } from "react";
import type { Card } from "./cardData";
import CardGallery from "./CardGallery";
import Footer from "./Footer";
import GachaPanel from "./GachaPanel";
import HeroSection from "./HeroSection";
import WorldSection from "./WorldSection";

export default function Home() {
  const [unlockedCards, setUnlockedCards] = useState<string[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const gachaPanelRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedCards = localStorage.getItem("unlockedCards");
    if (savedCards) {
      setUnlockedCards(JSON.parse(savedCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("unlockedCards", JSON.stringify(unlockedCards));
  }, [unlockedCards]);

  const handleCardDrawn = (card: Card) => {
    setIsDrawing(true);
    setUnlockedCards((currentCards) =>
      currentCards.includes(card.id) ? currentCards : [...currentCards, card.id],
    );

    window.setTimeout(() => {
      setIsDrawing(false);
    }, 1000);
  };

  const scrollToGachaPanel = () => {
    gachaPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-amber-50">
      <HeroSection
        onDrawClick={scrollToGachaPanel}
        onGalleryClick={scrollToGallery}
      />

      <div ref={gachaPanelRef}>
        <GachaPanel onCardDrawn={handleCardDrawn} isDrawing={isDrawing} />
      </div>

      <WorldSection />

      <div ref={galleryRef}>
        <CardGallery unlockedCards={unlockedCards} />
      </div>

      <Footer />
    </div>
  );
}
