import { BookOpen, Sparkles } from "lucide-react";
import Button from "./Button";

interface HeroSectionProps {
  onDrawClick: () => void;
  onGalleryClick: () => void;
}

export default function HeroSection({
  onDrawClick,
  onGalleryClick,
}: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663586645388/EWBWg5ijXtjsU9uveXqWdE/hero-taj-midnight-MBuAYGQajjzQEEhTx2DZzq.webp)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center animate-section-fade-up">
        <h1 className="mb-6 text-6xl font-bold text-amber-50 drop-shadow-lg md:text-7xl lg:text-8xl">
          Tales of the <span className="text-amber-300">Marble Moon</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-amber-100/80 drop-shadow-md md:text-2xl">
          Draw celestial cards inspired by the Taj Mahal and Mughal legends
          {" - "}each with its own AI-crafted scene and lore.
        </p>

        <p className="small-caps mb-12 text-sm tracking-wider text-amber-200/60 md:text-base">
          Mobile-first &bull; AI-generated art &bull; No wallet required
        </p>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            onClick={onDrawClick}
            className="px-8 py-6 text-lg font-bold"
          >
            <Sparkles size={20} />
            Draw a Card
          </Button>
          <Button
            onClick={onGalleryClick}
            variant="outline"
            className="px-8 py-6 text-lg font-bold"
          >
            <BookOpen size={20} />
            View Gallery
          </Button>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-amber-700/40">
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold">&#10022;</div>
            <p className="small-caps text-xs">Mythical Realms</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold">&#9670;</div>
            <p className="small-caps text-xs">Celestial Art</p>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl font-bold">&#10022;</div>
            <p className="small-caps text-xs">Sacred Lore</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform animate-bounce">
        <div className="small-caps mb-2 text-xs text-amber-600/50">
          Scroll to explore
        </div>
        <div className="text-amber-600/50">&#8595;</div>
      </div>
    </section>
  );
}
