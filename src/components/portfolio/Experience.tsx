import { useState } from "react";

const ROWS = [
  {
    title: "Trainee / Intern",
    org: "LGU Calagbangan, Sipocot, Camarines Sur",
    period: "Jan 2024",
    details: [
      "Designed organizational charts and managed document sorting to support efficient office operations.",
      "Assisted with administrative tasks including filing, data entry, and handling public inquiries.",
      "Supported the team in organizing community events and meetings.",
    ],
  },
  {
    title: "Student Assistant",
    org: "Sacred Heart High School, Sipocot, Camarines Sur",
    period: "Jan 2023 – Jan 2024",
    details: [
      "Provided technical support: OS installation, MS Office setup, and printer repair.",
      "Assisted in troubleshooting school networks and internet connectivity.",
      "Created event presentations and supported faculty with clerical and tech-related tasks.",
    ],
  },
  {
    title: "Web Developer Intern",
    org: "ServiceBai Philippines (Remote)",
    period: "June 2026 – Sept 2026 (Expected)",
    details: [
      "Developing backend features and API endpoints for an on-demand service marketplace web application built on Cloudflare Workers and D1.",
      "Collaborating with a team on API contracts and database schema design using a feature-branch Git workflow.",
      "Writing server-side validation, integration tests, and database seed scripts to support data quality across the platform.",
    ],
  },
];

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="experience" className="section">
      <div className="max-w-4xl mx-auto">
        <div className="reveal mb-12 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
            03 — timeline
          </p>
          <h2 className="mt-4 display-font text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Professional <span className="grad-text">Experience</span>
          </h2>
        </div>

        <div className="reveal space-y-3">
          {ROWS.map((r, i) => {
            const isOpen = open === i;
            return (
              <div
                key={r.title}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-7 py-5 text-left glass-hover"
                >
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                      {r.period}
                    </div>
                    <div className="mt-1.5 display-font text-lg md:text-xl text-white font-semibold truncate">
                      {r.title} <span className="text-white/40">@ {r.org}</span>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full glass-strong flex items-center justify-center text-white/80 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="px-5 md:px-7 pb-6 space-y-2 text-sm text-white/70 leading-relaxed">
                      {r.details.map((d) => (
                        <li key={d} className="flex gap-3">
                          <span className="grad-text font-mono">→</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
