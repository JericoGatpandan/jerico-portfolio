import { Youtube, Instagram, Facebook } from "lucide-react";

export function DabaForge() {
  return (
    <section id="dabaforge" className="section relative pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal neo-card rounded-lg p-8 md:p-12 relative overflow-hidden group bg-white border-2 border-black">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden neo-card p-2 flex items-center justify-center bg-white border-2 border-black group-hover:border-[#FFD60A] transition-colors">
              <img src="/DabaForge-logo.png" alt="DabaForge Logo" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="display-font text-3xl md:text-5xl font-semibold text-black tracking-tight">
                DabaForge
              </h2>
              <p className="mt-4 text-black/70 leading-relaxed text-sm md:text-base">
                We are currently building our own startup. It will serve as both a digital agency for niche web solutions and a dedicated SaaS platform tailored for engineering and construction firms.
              </p>
              
              <div className="mt-8 pt-6 border-t-2 border-black">
                <p className="text-xs text-black/50 font-mono mb-4 uppercase tracking-wider font-bold">Support the project & stay updated</p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a href="https://www.youtube.com/@DabaForge" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg neo-card neo-card-hover hover:bg-[#FFD60A] text-black/70 hover:text-black transition-all text-sm font-bold border-2 border-black">
                    <Youtube className="w-4 h-4 text-red-500" /> YouTube
                  </a>
                  <a href="https://www.instagram.com/dabaforge/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg neo-card neo-card-hover hover:bg-[#FFD60A] text-black/70 hover:text-black transition-all text-sm font-bold border-2 border-black">
                    <Instagram className="w-4 h-4 text-pink-500" /> Instagram
                  </a>
                  <a href="https://web.facebook.com/profile.php?id=61591816208296" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg neo-card neo-card-hover hover:bg-[#FFD60A] text-black/70 hover:text-black transition-all text-sm font-bold border-2 border-black">
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
