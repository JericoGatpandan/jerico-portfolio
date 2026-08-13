import { useEffect, useState } from "react";

const ROLES = [
  "COMPUTER SCIENCE STUDENT",
  "WEB DEVELOPER INTERN",
  "FULL-STACK DEVELOPER",
];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative section pt-32 md:pt-48 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetrical Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-4 items-end mb-16 px-4 md:px-8">
          
          {/* Left Side: Massive Title & Roles */}
          <div className="lg:col-span-8">
            <div className="reveal in flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#FFD60A] border-2 border-black flex items-center justify-center font-mono font-bold text-black text-xl shadow-[4px_4px_0_#000] -rotate-6">
                {"</>"}
              </div>
              <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.35em] text-black font-bold">
                portfolio - 2026
              </p>
            </div>

            <h1
              className="reveal in display-font font-black text-black leading-[1.1] tracking-[-0.04em] uppercase"
              style={{ fontSize: "clamp(2.5rem, 7.5vw, 6.5rem)" }}
            >
              Jerico<br />
              <span className="accent-text inline-block transform -rotate-1 mt-2">Gatpandan</span>
            </h1>
            
            <div className="reveal in mt-8 flex flex-wrap items-center gap-4 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-black">
              <span className="w-12 h-[3px] bg-black inline-block"></span>
              <span key={roleIdx} className="role-cycle font-bold bg-white border-2 border-black px-3 py-1 shadow-[3px_3px_0_#000]">
                {ROLES[roleIdx]}
              </span>
            </div>
          </div>
          
          {/* Right Side: Tagline & Actions */}
          <div className="lg:col-span-4 flex flex-col gap-8 pb-4">
            
            {/* The Tagline */}
            <div className="reveal in bg-white border-[3px] border-black shadow-[8px_8px_0_#FFD60A] p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300 relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center font-bold text-xl shadow-[2px_2px_0_#000]">!</div>
              <h2 className="display-font text-2xl md:text-3xl font-black leading-[1.1] uppercase">
                "I build software that looks as good as it works."
              </h2>
            </div>
            
            <p className="reveal in text-sm md:text-base text-black font-medium leading-relaxed border-t-4 border-black pt-5">
              Computer Science student and full-stack developer with hands-on experience across React, Node.js, Express, and MySQL. Proven contributor in regional hackathons and startup pitch competitions. Seeking to grow through high-impact projects.
            </p>
            
            <div className="reveal in flex flex-wrap gap-4 mt-2">
              <a
                href="#work"
                className="bg-black border-[3px] border-black shadow-[4px_4px_0_#000] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_#000] transition-all px-6 py-3 text-sm font-bold text-white uppercase tracking-wider"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="neo-card neo-card-hover bg-white px-6 py-3 text-sm font-bold text-black uppercase tracking-wider"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        {/* Infographic Scrolling Ticker Animation */}
        <div className="reveal mt-20 w-full overflow-hidden border-y-4 border-black bg-white py-4 shadow-[0_8px_0_rgba(0,0,0,1)] rotate-[-1deg] scale-105">
             <div className="marquee font-mono text-sm md:text-base uppercase tracking-[0.2em] font-bold text-black flex items-center">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-8 items-center px-4 whitespace-nowrap">
                    <span className="bg-white px-2 border-2 border-black shadow-[2px_2px_0_#000]">10+ Apps Shipped</span>
                    <span className="text-black text-xl">✦</span>
                    <span>Naga IDEA2STARTUP 2nd Runner-Up</span>
                    <span className="text-black text-xl">✦</span>
                    <span className="bg-black text-white px-2 border-2 border-black shadow-[2px_2px_0_#FFD60A]">Hack4Gov V Finalist</span>
                    <span className="text-black text-xl">✦</span>
                    <span>Outstanding Rookie</span>
                    <span className="text-black text-xl">✦</span>
                    <span className="underline decoration-4 decoration-[#FFD60A]">LeetCode 1st</span>
                    <span className="text-black text-xl">✦</span>
                  </div>
                ))}
             </div>
        </div>
      </div>
    </section>
  );
}
