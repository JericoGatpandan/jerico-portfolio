import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { PROJECTS } from "@/data/projects";

export function Work() {
  // Featured project is always the one marked as featured
  const featured = PROJECTS.find((p) => p.featured)!;
  
  // Get the non-featured projects
  const nonFeatured = useMemo(() => PROJECTS.filter((p) => !p.featured), []);

  // Take the top 6 for the homepage
  const list = useMemo(
    () => nonFeatured.slice(0, 6),
    [nonFeatured]
  );

  return (
    <section id="work" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
              02 — selected projects
            </p>
            <h2 className="mt-4 display-font text-4xl md:text-6xl font-semibold tracking-tight text-white">
              My <span className="grad-text">Work</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/65 leading-relaxed">
            A curated list of applications across cooperative management, travel booking, AI-assisted
            forecasting, and more — built alongside coursework, hackathons, and community teams.
          </p>
        </div>

        {/* Featured */}
        <div className="reveal glass-strong rounded-3xl p-6 md:p-10 grid md:grid-cols-5 gap-8 mb-10 relative overflow-hidden group">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full"
            style={{ background: "#06b6d4", filter: "blur(90px)", opacity: 0.3 }}
          />
          <div className="md:col-span-3 relative">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50">
              Featured Project · {featured.year}
            </span>
            <h3 className="mt-3 display-font text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
              {featured.link ? (
                <a href={featured.link} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
                  {featured.title} ↗
                </a>
              ) : (
                featured.title
              )}
            </h3>
            <p className="mt-2 text-white/60 text-sm md:text-base">
              {featured.subtitle}
            </p>
            <p className="mt-6 text-white/75 leading-relaxed max-w-xl">
              {featured.blurb}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {featured.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[10px] uppercase tracking-wider text-white/75 px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.04]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 relative flex items-center justify-center">
            {featured.link ? (
              <a href={featured.link} target="_blank" rel="noreferrer" className="block w-full h-full">
                <div className="glass rounded-2xl w-full h-full min-h-[250px] flex items-center justify-center relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                  {featured.image ? (
                    <img src={featured.image} alt={featured.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  ) : (
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 30%, #6366f1, transparent 60%), radial-gradient(circle at 70% 70%, #06b6d4, transparent 55%)",
                        filter: "blur(20px)",
                      }}
                    />
                  )}
                </div>
              </a>
            ) : (
              <div className="glass rounded-2xl w-full h-full min-h-[250px] flex items-center justify-center relative overflow-hidden">
                {featured.image ? (
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                ) : (
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-40"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, #6366f1, transparent 60%), radial-gradient(circle at 70% 70%, #06b6d4, transparent 55%)",
                      filter: "blur(20px)",
                    }}
                  />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((p) => {
            const CardWrapper = p.link ? "a" : "div";
            const wrapperProps = p.link ? { href: p.link, target: "_blank", rel: "noreferrer" } : {};

            return (
              <CardWrapper
                key={p.title}
                {...wrapperProps}
                className="reveal glass glass-hover rounded-2xl p-0 flex flex-col overflow-hidden group cursor-pointer"
              >
                {/* Image Placeholder Area */}
                {p.image && (
                  <div className="w-full aspect-video bg-white/5 relative overflow-hidden border-b border-white/5">
                    <img 
                      src={p.image} 
                      alt={p.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                    />
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-3 display-font text-xl font-semibold text-white leading-tight group-hover:text-cyan-400 transition-colors">
                    {p.title} {p.link && "↗"}
                  </h3>
                  <p className="mt-1 text-sm text-white/55">{p.subtitle}</p>
                  <p className="mt-4 text-sm text-white/70 leading-relaxed flex-1">
                    {p.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] uppercase tracking-wider text-white/65 px-2 py-1 rounded-md border border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                    {p.stack.length > 4 && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 px-2 py-1">
                        +{p.stack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>

        {/* View All Button */}
        {nonFeatured.length > 6 && (
          <div className="reveal mt-12 flex justify-center">
            <Link
              to="/projects"
              className="glass-strong glass-hover rounded-full px-8 py-3 text-sm font-medium text-white transition-all flex items-center gap-2 group"
            >
              View All Projects 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
