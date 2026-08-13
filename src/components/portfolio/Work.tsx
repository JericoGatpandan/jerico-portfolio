import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { PROJECTS, Project } from "@/data/projects";

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
        <div className="reveal mb-12 flex flex-col gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-black/50">
              02 — selected projects
            </p>
            <h2 className="mt-4 display-font text-4xl md:text-6xl font-semibold tracking-tight text-black">
              My <span className="underline decoration-4 decoration-[#FFD60A]">Work</span>
            </h2>
          </div>
          <p className="max-w-2xl text-sm md:text-base text-black/65 leading-relaxed">
            A curated list of applications across cooperative management, travel booking, AI-assisted
            forecasting, and more — built alongside coursework, hackathons, and community teams.
            <br /><br />
            <span className="text-black/40 italic text-xs md:text-sm">
              * Note: Many of my other projects are private internal tools or are not currently deployed. <a href="#contact" className="hover:bg-[#FFD60A] hover:text-black transition-colors underline decoration-black/20 underline-offset-2">Contact me</a> to learn more!
            </span>
          </p>
        </div>

        {/* Featured */}
        <div className="reveal neo-card rounded-lg p-6 md:p-10 grid md:grid-cols-5 gap-8 mb-10 relative overflow-hidden group">
          <div className="md:col-span-3 relative">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-black/50">
              Featured Project · {featured.year}
            </span>
            <h3 className="mt-3 display-font text-3xl md:text-5xl font-semibold text-black leading-tight tracking-tight">
              <Link to="/projects/$id" params={{ id: featured.id }} className="hover:bg-[#FFD60A] hover:text-black transition-colors text-left block">
                {featured.title}
              </Link>
            </h3>
            <p className="mt-2 text-black/60 text-sm md:text-base">
              {featured.subtitle}
            </p>
            <p className="mt-6 text-black/75 leading-relaxed max-w-xl">
              {featured.blurb}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {featured.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[10px] uppercase tracking-wider text-black/75 px-2.5 py-1 rounded-md border border-black bg-[#FFD60A]/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 relative flex items-center justify-center">
            <Link to="/projects/$id" params={{ id: featured.id }} className="block w-full h-full text-left">
              <div className="neo-card rounded-lg w-full h-full min-h-[250px] flex items-center justify-center relative overflow-hidden group-hover:border-black transition-colors">
                {featured.image ? (
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-500" />
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
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((p) => {
            return (
              <Link
                key={p.title}
                to="/projects/$id"
                params={{ id: p.id }}
                className="reveal neo-card neo-card-hover rounded-lg p-0 flex flex-col overflow-hidden group cursor-pointer text-left w-full h-full block"
              >
                {/* Image Placeholder Area */}
                {p.image && (
                  <div className="w-full aspect-video bg-[#FFD60A]/10 relative overflow-hidden border-b border-black">
                    <img 
                      src={p.image} 
                      alt={p.title}
                      className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-500" 
                    />
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-black/45">
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-3 display-font text-xl font-semibold text-black leading-tight group-hover:text-[#FFD60A] transition-colors">
                    {p.title} {p.link && "↗"}
                  </h3>
                  <p className="mt-1 text-sm text-black/55">{p.subtitle}</p>
                  <p className="mt-4 text-sm text-black/70 leading-relaxed flex-1">
                    {p.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] uppercase tracking-wider text-black/65 px-2 py-1 rounded-md border border-black"
                      >
                        {s}
                      </span>
                    ))}
                    {p.stack.length > 4 && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-black/40 px-2 py-1">
                        +{p.stack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        {nonFeatured.length > 6 && (
          <div className="reveal mt-12 flex justify-center">
            <Link
              to="/projects"
              className="neo-card neo-card-hover px-8 py-3 text-sm font-medium text-black transition-all flex items-center gap-2 group"
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
