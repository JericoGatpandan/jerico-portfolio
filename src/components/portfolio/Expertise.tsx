const CARDS = [
  {
    tag: "software",
    title: "Full-Stack Development",
    body: "Building end-to-end web systems with React, Node.js, Express, and MySQL. 10+ shipped apps spanning management platforms, booking systems, and AI tools.",
    stack: ["React", "Node.js", "Express", "MySQL", "Docker", "Hostinger"],
  },
  {
    tag: "frontend",
    title: "Frontend & UI",
    body: "Converting Figma into production React components with Tailwind CSS and shadcn/ui. Focused on clean interfaces, accessibility, and considered motion.",
    stack: ["React", "Tailwind", "shadcn/ui", "Figma"],
  },
  {
    tag: "data + ai",
    title: "Data & Backend",
    body: "Relational schema design, stored procedures, and role-based access. Contributed ML classifiers and a physics-informed neural net for flood forecasting.",
    stack: ["Python", "PINN", "MySQL", "Postgres", "Cloudflare Workers & D1"],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-14 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-black/50">
            01 — what i do
          </p>
          <h2 className="mt-4 display-font text-4xl md:text-6xl font-semibold tracking-tight text-black">
            My <span className="underline decoration-4 decoration-[#FFD60A]">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="reveal neo-card neo-card-hover rounded-lg p-6 flex flex-col"
            >
              <div className="font-mono text-[11px] text-black/40 mb-3">
                &lt;code tag=&quot;{c.tag}&quot;&gt;
              </div>
              <h3 className="display-font text-xl md:text-2xl font-semibold text-black leading-tight">
                <span className="font-bold">{c.title}</span>
              </h3>
              <p className="mt-4 text-sm text-black/70 leading-relaxed">{c.body}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-wider text-black/70 px-2 py-1 rounded-md border border-black bg-[#f5f5f5]"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="font-mono text-[11px] text-black/40 mt-6">
                &lt;/code&gt;
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
