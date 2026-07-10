import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Background } from "@/components/portfolio/Background";
import { Footer } from "@/components/portfolio/Footer";
import { PROJECTS, FILTERS, ProjectCategory } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "All Projects — Jerico Gatpandan" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const list = useMemo(
    () =>
      PROJECTS.filter((p) => filter === "All" || p.category === filter),
    [filter]
  );

  return (
    <>
      <Background />
      
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <Link
            to="/"
            className="text-white/60 hover:text-white transition-colors flex items-center gap-2 font-mono text-sm"
          >
            <span>←</span> Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
              project archive
            </p>
            <h1 className="mt-4 display-font text-4xl md:text-6xl font-semibold tracking-tight text-white">
              All <span className="grad-text">Projects</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/65 leading-relaxed">
              A comprehensive archive of applications, websites, and tools I have built over time, ranging from coursework and hackathon prototypes to production applications.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-10 font-mono text-xs">
            <span className="text-white/40 mr-2">filter by</span>
            <button
              onClick={() => setFilter("All")}
              className={`px-3 py-1.5 rounded-full border transition-colors ${
                filter === "All"
                  ? "text-white border-white/40 bg-white/10"
                  : "text-white/55 border-white/10 hover:text-white hover:border-white/25"
              }`}
            >
              All
            </button>
            {FILTERS.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded-full border transition-colors ${
                    active
                      ? "text-white border-white/40 bg-white/10"
                      : "text-white/55 border-white/10 hover:text-white hover:border-white/25"
                  }`}
                >
                  {f}
                </button>
              );
            })}
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
                  className="glass glass-hover rounded-2xl p-0 flex flex-col overflow-hidden group cursor-pointer animate-in fade-in zoom-in-95 duration-500"
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
          
          {list.length === 0 && (
            <div className="py-20 text-center text-white/50 font-mono text-sm">
              No projects found for this category.
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
}
