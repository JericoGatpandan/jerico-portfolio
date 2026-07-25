import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Footer } from "@/components/portfolio/Footer";
import { DabaForge } from "@/components/portfolio/DabaForge";
import { PROJECTS } from "@/data/projects";
import { useReveal } from "@/hooks/useReveal";
import { useEffect } from "react";

export const Route = createFileRoute("/projects/$id")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.id === params.id);
    if (!project) {
      throw notFound();
    }
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.title} — Jerico Gatpandan` },
    ],
  }),
  component: ProjectCaseStudy,
});

function ProjectCaseStudy() {
  const { project } = Route.useLoaderData();
  useReveal();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Background />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/projects"
            className="text-white/60 hover:text-white transition-colors flex items-center gap-2 font-mono text-sm"
          >
            <span>←</span> Back to Projects
          </Link>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
            >
              Visit Project ↗
            </a>
          )}
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 mb-6">
              <span>{project.category}</span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span>{project.year}</span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span className="text-cyan-400/80">{project.role}</span>
            </div>
            <h1 className="display-font text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-white/65 leading-relaxed font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Featured Image */}
          {project.image && (
            <div className="w-full aspect-video rounded-3xl overflow-hidden glass mb-16 relative group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none"></div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-16">
            <h3 className="font-mono text-sm uppercase tracking-widest text-white/40 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs text-white/70 px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.03]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Content */}
          <div className="space-y-16">
            {project.problem && (
              <section className="reveal">
                <h2 className="display-font text-3xl font-semibold text-white mb-6 flex items-center gap-4">
                  <span className="text-cyan-500">01.</span> The Problem
                </h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-white/70 leading-relaxed">{project.problem}</p>
                </div>
              </section>
            )}

            {project.solution && (
              <section className="reveal">
                <h2 className="display-font text-3xl font-semibold text-white mb-6 flex items-center gap-4">
                  <span className="text-cyan-500">02.</span> Our Solution
                </h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-white/70 leading-relaxed">{project.solution}</p>
                </div>
              </section>
            )}

            {project.features && project.features.length > 0 && (
              <section className="reveal glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
                  style={{ background: "#06b6d4", filter: "blur(120px)", opacity: 0.15 }}
                />
                <h2 className="display-font text-3xl font-semibold text-white mb-8 relative z-10">
                  Key Features
                </h2>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 relative z-10">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span className="text-white/75 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.results && (
              <section className="reveal">
                <h2 className="display-font text-3xl font-semibold text-white mb-6 flex items-center gap-4">
                  <span className="text-cyan-500">03.</span> Results & Impact
                </h2>
                <div className="prose prose-invert prose-lg max-w-none border-l-2 border-cyan-500/30 pl-6 py-2">
                  <p className="text-white/70 leading-relaxed">{project.results}</p>
                </div>
              </section>
            )}
          </div>
          
          {/* Bottom Action */}
          <div className="mt-24 pt-10 border-t border-white/10 flex flex-col items-center text-center">
            <h3 className="display-font text-2xl font-semibold text-white mb-6">Want to see more?</h3>
            <Link
              to="/projects"
              className="glass-strong glass-hover rounded-full px-8 py-3 text-sm font-medium text-white transition-all flex items-center gap-2 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Back to All Projects 
            </Link>
          </div>
        </div>
      </main>

      <DabaForge />
      <Footer />
    </>
  );
}
