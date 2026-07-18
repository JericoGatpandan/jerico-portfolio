import { Youtube, Instagram, Facebook } from "lucide-react";

export function DabaForge() {
  return (
    <section id="dabaforge" className="section relative pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          <div
            aria-hidden
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
            style={{ background: "#f59e0b", filter: "blur(120px)", opacity: 0.15 }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden glass p-2 flex items-center justify-center bg-white/5 border-white/10 group-hover:border-amber-500/30 transition-colors">
              <img src="/DabaForge-logo.png" alt="DabaForge Logo" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="display-font text-3xl md:text-5xl font-semibold text-white tracking-tight">
                DabaForge
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed text-sm md:text-base">
                We are currently building our own startup. It will serve as both a digital agency for niche web solutions and a dedicated SaaS platform tailored for engineering and construction firms.
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-white/50 font-mono mb-4 uppercase tracking-wider">Support the project & stay updated</p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a href="https://www.youtube.com/@DabaForge" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 hover:text-white text-white/70 transition-all text-sm">
                    <Youtube className="w-4 h-4 text-red-500" /> YouTube
                  </a>
                  <a href="https://www.instagram.com/dabaforge/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 hover:text-white text-white/70 transition-all text-sm">
                    <Instagram className="w-4 h-4 text-pink-500" /> Instagram
                  </a>
                  <a href="https://web.facebook.com/profile.php?id=61591816208296" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 hover:text-white text-white/70 transition-all text-sm">
                    <Facebook className="w-4 h-4 text-blue-500" /> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
