import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Background } from "@/components/portfolio/Background";
import { DabaForge } from "@/components/portfolio/DabaForge";
import { Footer } from "@/components/portfolio/Footer";
import { PROJECTS, FILTERS, ProjectCategory, Project } from "@/data/projects";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "All Projects — Jerico Gatpandan" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  useReveal();
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
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-black bg-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <Link
            to="/"
            className="text-black/60 hover:text-black transition-colors flex items-center gap-2 font-mono text-sm"
          >
            <span>←</span> Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-black/50">
              project archive
            </p>
            <h1 className="mt-4 display-font text-4xl md:text-6xl font-semibold tracking-tight text-black">
              All <span className="underline decoration-4 decoration-[#FFD60A]">Projects</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-black/65 leading-relaxed">
              A comprehensive archive of applications, websites, and tools I have built over time, ranging from coursework and hackathon prototypes to production applications.
              <br /><br />
              <span className="text-black/40 italic text-sm">
                * Note: I have built many more applications that are either private internal tools, client projects, or are not currently deployed. <a href="#contact" className="transition-colors underline decoration-black/20 underline-offset-2">Contact me</a> to learn more!
              </span>
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-10 font-mono text-xs">
            <span className="text-black/40 mr-2">filter by</span>
            <button
              onClick={() => setFilter("All")}
              className={`px-3 py-1.5 rounded-full border transition-colors ${
                filter === "All"
                  ? "text-black border-black bg-[#FFD60A]"
                  : "text-black/55 border-black/30 hover:bg-[#FFD60A]/20 hover:text-black"
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
                      ? "text-black border-black bg-[#FFD60A]"
                      : "text-black/55 border-black/30 hover:bg-[#FFD60A]/20 hover:text-black"
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
              return (
                <Link
                  key={p.title}
                  to="/projects/$id"
                  params={{ id: p.id }}
                  className="neo-card neo-card-hover rounded-lg p-0 flex flex-col overflow-hidden group cursor-pointer animate-in fade-in zoom-in-95 duration-500 text-left w-full h-full block"
                >
                  {/* Image Placeholder Area */}
                  {p.image && (
                    <div className="w-full aspect-video bg-white/5 relative overflow-hidden border-b-2 border-black">
                      <img 
                        src={p.image} 
                        alt={p.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                      />
                    </div>
                  )}
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-black/45">
                      <span>{p.category}</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="mt-3 display-font text-xl font-semibold text-black leading-tight group-hover:text-black group-hover:underline decoration-2 underline-offset-4 transition-colors">
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
          
          {list.length === 0 && (
            <div className="py-20 text-center text-black/50 font-mono text-sm">
              No projects found for this category.
            </div>
          )}
        </div>
      </main>
      
      <DabaForge />
      <Footer />
    </>
  );
}
