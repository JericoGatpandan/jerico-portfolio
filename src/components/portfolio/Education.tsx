const EDUCATION = [
  {
    period: "2024 – 2027 (Expected)",
    title: "BS Computer Science",
    place: "University of Nueva Caceres, Naga City",
    detail: "Dean's Lister — 1st Year (1st & 2nd Sem), 2nd Year (1st & 2nd Sem).",
  },
  {
    period: "2022 – 2024",
    title: "TVL — Computer Systems Servicing",
    place: "Sacred Heart High School, Sipocot",
    detail: "Senior high track focused on hardware, networking, and OS administration.",
  },
  {
    period: "Certification",
    title: "National Certificate II — Computer Systems Servicing",
    place: "TESDA-aligned NC II",
    detail: "Validated professional competency in computer systems servicing.",
  },
];

const AWARDS = [
  "2nd Runner-Up · Naga IDEA2STARTUP 2025 (Team UNC Colab, App Developer)",
  "Finalist · Hack4Gov Region V (2025)",
  "Outstanding Rookie Programmer (2025)",
  "1st Place · LeetCode Programming Competition",
  "Congressional District Champion (1st Dist.) · CSS · TLE Expo & Technolympics 2023",
];

export function Education() {
  return (
    <section id="education" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-14 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-black/50">
            04 — background
          </p>
          <h2 className="mt-4 display-font text-4xl md:text-6xl font-semibold tracking-tight text-black">
            Education & <span className="underline decoration-4 decoration-[#FFD60A]">Awards</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Timeline */}
          <div className="lg:col-span-3 relative">
            <div
              aria-hidden
              className="absolute left-4 top-2 bottom-2 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(0,0,0,0.2), transparent)",
              }}
            />
            <ul className="space-y-6">
              {EDUCATION.map((item) => (
                <li key={item.title} className="reveal relative pl-12">
                  <span
                    className="absolute left-4 top-6 -translate-x-1/2 w-3.5 h-3.5 rounded-full neo-card"
                    style={{
                      boxShadow:
                        "0 0 0 4px rgba(0,0,0,0.1), 0 0 0 1px #000",
                    }}
                  />
                  <div className="neo-card neo-card-hover rounded-lg p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] bg-[#FFD60A] text-black px-1 font-semibold">
                      {item.period}
                    </p>
                    <h3 className="mt-2 display-font text-lg font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-sm text-black/55">{item.place}</p>
                    <p className="mt-2 text-sm text-black/70 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Awards */}
          <div className="lg:col-span-2 reveal">
            <div className="neo-card rounded-lg p-6 h-full">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-black/50">
                achievements
              </p>
              <h3 className="mt-2 display-font text-2xl font-semibold text-black">
                Selected <span className="underline decoration-4 decoration-[#FFD60A]">Awards</span>
              </h3>
              <ul className="mt-5 space-y-3">
                {AWARDS.map((a) => (
                  <li
                    key={a}
                    className="flex gap-3 text-sm text-black/75 leading-relaxed"
                  >
                    <span className="text-[#FFD60A] drop-shadow-[1px_1px_0_#000] font-mono shrink-0">★</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
