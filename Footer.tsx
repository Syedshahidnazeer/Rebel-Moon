import { Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-amber-700/20 bg-slate-950 px-4 py-12 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-2xl font-bold text-amber-50">
              Marble Moon
            </h3>
            <p className="text-sm text-amber-100/60">
              A celestial card-drawing experience inspired by the Taj Mahal and
              Mughal legends.
            </p>
          </div>

          <div className="text-center">
            <h4 className="small-caps mb-4 text-sm font-bold text-amber-300">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-amber-100/60">
              <li>
                <a href="#!" className="transition-colors hover:text-amber-100">
                  About This Project
                </a>
              </li>
              <li>
                <a href="#!" className="transition-colors hover:text-amber-100">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#!" className="transition-colors hover:text-amber-100">
                  Card Collection
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="small-caps mb-4 text-sm font-bold text-amber-300">
              Connect
            </h4>
            <div className="flex justify-center gap-4 md:justify-end">
              <a
                href="#!"
                className="text-amber-100/60 transition-colors hover:text-amber-100"
                title="Project"
              >
                <Globe size={20} />
              </a>
              <a
                href="#!"
                className="text-amber-100/60 transition-colors hover:text-amber-100"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="my-8 border-t border-amber-700/20" />

        <div className="space-y-4 text-center text-sm text-amber-100/50">
          <p>
            <span className="font-semibold">
              No blockchain. No gambling. Just cosmetic play.
            </span>
          </p>
          <p>
            This is a fictional universe inspired by the Taj Mahal, a UNESCO
            World Heritage Site and symbol of love and architectural excellence.
          </p>
          <p className="text-xs">
            &copy; 2026 Tales of the Marble Moon. Built with React, Tailwind CSS,
            and AI-generated art.
          </p>
        </div>
      </div>
    </footer>
  );
}
