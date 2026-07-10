// Tool list with official simple-icons CDN slugs (where available)
// Falls back to a tinted initial badge when no icon exists.
type Tool = { name: string; slug?: string; color?: string };

const TOOLS: Tool[] = [
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { name: "Express", slug: "express", color: "FFFFFF" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "Java", slug: "openjdk", color: "FFFFFF" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", slug: "css", color: "1572B6" },
  { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
  { name: "shadcn/ui", slug: "shadcnui", color: "FFFFFF" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "GitHub", slug: "github", color: "FFFFFF" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Assembly", slug: "assemblyscript", color: "007AC6" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "Cloudflare", slug: "cloudflare", color: "F38020" },
  { name: "Hostinger", slug: "hostinger", color: "673DE6" },
];

function ToolIcon({ tool }: { tool: Tool }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-28 shrink-0">
      <div className="glass rounded-2xl w-20 h-20 flex items-center justify-center glass-hover">
        {tool.slug ? (
          <img
            src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color ?? "FFFFFF"}`}
            alt={`${tool.name} logo`}
            className="tool-icon w-10 h-10"
            loading="lazy"
          />
        ) : (
          <div className="tool-icon w-10 h-10 rounded-lg grad-text font-bold text-xl flex items-center justify-center bg-white/5">
            {tool.name
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </div>
        )}
      </div>
      <span className="text-xs text-white/60 text-center leading-tight">
        {tool.name}
      </span>
    </div>
  );
}

export function Stack() {
  const loop = [...TOOLS, ...TOOLS];
  return (
    <section id="stack" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-10 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
              toolbelt
            </p>
            <h2 className="mt-3 display-font text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Tools I build <span className="grad-text">with</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/60">
            Languages, frameworks, and workflows I reach for across engineering,
            data, and design.
          </p>
        </div>

        {/* Marquee */}
        <div className="reveal marquee-wrap relative overflow-hidden glass rounded-3xl p-6">
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-24 z-10"
            style={{
              background:
                "linear-gradient(to right, rgba(6,10,24,0.95), transparent)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 w-24 z-10"
            style={{
              background:
                "linear-gradient(to left, rgba(6,10,24,0.95), transparent)",
            }}
          />
          <div className="marquee gap-6">
            {loop.map((t, i) => (
              <ToolIcon tool={t} key={`${t.name}-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
