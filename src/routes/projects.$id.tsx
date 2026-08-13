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
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-black bg-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/projects"
            className="text-black/60 hover:text-black transition-colors flex items-center gap-2 font-mono text-sm"
          >
            <span>←</span> Back to Projects
          </Link>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-black hover:text-[#FFD60A] transition-colors flex items-center gap-2 font-bold"
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
            <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-black/50 mb-6">
              <span>{project.category}</span>
              <span className="w-1 h-1 rounded-full bg-black/20"></span>
              <span>{project.year}</span>
              <span className="w-1 h-1 rounded-full bg-black/20"></span>
              <span className="text-black/80 font-semibold">{project.role}</span>
            </div>
            <h1 className="display-font text-4xl md:text-6xl font-semibold tracking-tight text-black leading-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-black/65 leading-relaxed font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Featured Image */}
          {project.image && (
            <div className="w-full aspect-video rounded-lg overflow-hidden neo-card mb-16 relative group border-2 border-black">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 border-2 border-black rounded-lg pointer-events-none"></div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-16">
            <h3 className="font-mono text-sm uppercase tracking-widest text-black/40 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs text-black/70 px-3 py-1.5 rounded-md border-2 border-black bg-white"
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
                <h2 className="display-font text-3xl font-semibold text-black mb-6 flex items-center gap-4">
                  <span className="font-bold underline decoration-2 decoration-[#FFD60A]">01.</span> The Problem
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-black/70 leading-relaxed">{project.problem}</p>
                </div>
              </section>
            )}

            {project.solution && (
              <section className="reveal">
                <h2 className="display-font text-3xl font-semibold text-black mb-6 flex items-center gap-4">
                  <span className="font-bold underline decoration-2 decoration-[#FFD60A]">02.</span> Our Solution
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-black/70 leading-relaxed">{project.solution}</p>
                </div>
              </section>
            )}

            {project.features && project.features.length > 0 && (
              <section className="reveal neo-card rounded-lg p-8 md:p-10 relative overflow-hidden bg-white border-2 border-black">
                <h2 className="display-font text-3xl font-semibold text-black mb-8 relative z-10">
                  Key Features
                </h2>
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 relative z-10">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 font-bold">▹</span>
                      <span className="text-black/75 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.results && (
              <section className="reveal">
                <h2 className="display-font text-3xl font-semibold text-black mb-6 flex items-center gap-4">
                  <span className="font-bold underline decoration-2 decoration-[#FFD60A]">03.</span> Results & Impact
                </h2>
                <div className="prose prose-lg max-w-none border-l-4 border-black pl-6 py-2">
                  <p className="text-black/70 leading-relaxed">{project.results}</p>
                </div>
              </section>
            )}
          </div>
          
          {/* Bottom Action */}
          <div className="mt-24 pt-10 border-t-2 border-black flex flex-col items-center text-center">
            <h3 className="display-font text-2xl font-semibold text-black mb-6">Want to see more?</h3>
            <Link
              to="/projects"
              className="neo-card bg-[#FFD60A] hover:bg-[#FFD60A]/80 rounded-lg px-8 py-3 text-sm font-bold text-black transition-all flex items-center gap-2 group shadow-[4px_4px_0_#000]"
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
