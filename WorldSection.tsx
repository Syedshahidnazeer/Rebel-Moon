import { BookOpen } from "lucide-react";

const conceptRealms = [
  {
    title: "Midnight Garden",
    description:
      "Where marble pavilions bloom under starlight, and geometric patterns whisper ancient prayers.",
    icon: "&#127769;",
  },
  {
    title: "Yamuna's Embrace",
    description:
      "The sacred river flows with celestial light, carrying spirits and reflections of eternity.",
    icon: "&#128167;",
  },
  {
    title: "Chamber of Words",
    description:
      "Islamic calligraphy comes alive, each letter a spell, each word a guardian of meaning.",
    icon: "&#10024;",
  },
];

export default function WorldSection() {
  return (
    <section className="bg-slate-950 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center animate-section-fade-up">
          <h2 className="mb-4 text-5xl font-bold text-amber-50 md:text-6xl">
            The World of Marble Moon
          </h2>
          <p className="text-lg text-amber-100/70">
            A fusion of Taj Mahal architecture and celestial mythology
          </p>
        </div>

        <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 animate-section-fade-up">
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-2xl font-bold text-amber-50">
                <span className="text-amber-400">&#9670;</span>
                Taj Mahal Reimagined
              </h3>
              <p className="leading-relaxed text-amber-100/70">
                The Taj Mahal transcends its historical form in this mythical
                realm. White marble pavilions float among stars, geometric inlay
                patterns glow with ancient magic, and the Yamuna river flows with
                celestial light. Every arch, dome, and minaret becomes a gateway
                to wonder.
              </p>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-2xl font-bold text-amber-50">
                <span className="text-emerald-400">&#10022;</span>
                Indo-Islamic Motifs
              </h3>
              <p className="leading-relaxed text-amber-100/70">
                Intricate geometric patterns and calligraphic ornament form the
                visual language of this world. Each card celebrates the
                mathematical beauty and spiritual depth of Mughal art, where every
                curve and flourish carries meaning and reverence.
              </p>
            </div>

            <div>
              <h3 className="mb-3 flex items-center gap-2 text-2xl font-bold text-amber-50">
                <span className="text-violet-400">&#9670;</span>
                Celestial Guardians
              </h3>
              <p className="leading-relaxed text-amber-100/70">
                Mythical beings - spirits of water, guardians of stone, and
                embodiments of script - inhabit this realm. They are keepers of
                balance, witnesses to eternity, and protectors of sacred spaces
                where love and architecture become one.
              </p>
            </div>
          </div>

          <div className="marble-texture animate-section-fade-up relative flex h-96 items-center justify-center overflow-hidden rounded-lg border-2 border-amber-700/40 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="text-center">
              <BookOpen size={64} className="mx-auto mb-4 text-amber-600/40" />
              <p className="text-sm text-amber-100/50">
                Each card tells a story woven from architecture, mythology, and
                celestial wonder.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-amber-50">
            Concept Realms
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {conceptRealms.map((realm, idx) => (
              <div
                key={realm.title}
                className="marble-texture animate-fade-in-up rounded-lg border-2 border-amber-700/40 bg-slate-900/50 p-6 transition-all duration-300 hover:border-amber-600/60"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className="mb-3 text-4xl"
                  dangerouslySetInnerHTML={{ __html: realm.icon }}
                />
                <h4 className="mb-2 text-xl font-bold text-amber-50">
                  {realm.title}
                </h4>
                <p className="text-sm leading-relaxed text-amber-100/60">
                  {realm.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="marble-texture mt-16 rounded-lg border-2 border-amber-700/40 bg-slate-900/50 p-8 text-center animate-section-fade-up">
          <h3 className="mb-3 text-xl font-bold text-amber-50">About the Art</h3>
          <p className="leading-relaxed text-amber-100/70">
            Each card's artwork is AI-generated using image synthesis guided by
            prompts inspired by Taj Mahal architecture, Mughal aesthetics, and
            celestial mythology. The lore is edited for coherence so the deck
            feels like one fictional universe rather than a random gallery.
          </p>
        </div>
      </div>
    </section>
  );
}
