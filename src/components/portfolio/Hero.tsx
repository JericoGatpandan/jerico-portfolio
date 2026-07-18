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
    <section id="top" className="relative section pt-40 md:pt-48 pb-20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="reveal in font-mono text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/50 mb-8">
          portfolio - 2026
        </p>

        <h1
          className="reveal in display-font font-semibold text-white leading-[0.92] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2.75rem, 11vw, 9.5rem)" }}
        >
          JERICO<br className="md:hidden" />
          <span className="md:ml-6"> </span>
          <span className="grad-text">GATPANDAN</span>
        </h1>

        <div className="reveal in mt-8 flex flex-col md:flex-row items-center justify-center gap-3 font-mono text-xs md:text-sm uppercase tracking-[0.28em] text-white/70">
          <span key={roleIdx} className="role-cycle">
            {ROLES[roleIdx]}
          </span>
        </div>

        <p className="reveal mt-10 max-w-2xl mx-auto text-base md:text-lg text-white/70 leading-relaxed">
          Computer Science student and full-stack developer with hands-on experience across React, Node.js, Express, and MySQL, having built 10+ applications ranging from cooperative management systems to AI-assisted forecasting tools. Proven contributor in regional hackathons and startup pitch competitions, with strong fundamentals in database design, software engineering, and student leadership. Seeking to grow as a full-stack developer through real-world, high-impact projects.
        </p>

        <div className="reveal mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#work"
            className="glass-strong glass-hover rounded-full px-6 py-3 text-sm font-medium text-white"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="glass glass-hover rounded-full px-6 py-3 text-sm font-medium text-white/85"
          >
            Get in touch →
          </a>
        </div>

        <p className="reveal mt-16 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
          as recognized in
        </p>
        <div className="reveal mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs text-white/55">
          <span>&lt;/&gt; Naga IDEA2STARTUP · 2nd Runner-Up</span>
          <span className="text-white/25">·</span>
          <span>Hack4Gov V · Finalist</span>
          <span className="text-white/25">·</span>
          <span>Outstanding Rookie Programmer</span>
          <span className="text-white/25">·</span>
          <span>LeetCode Comp · 1st</span>
        </div>
      </div>
    </section>
  );
}
