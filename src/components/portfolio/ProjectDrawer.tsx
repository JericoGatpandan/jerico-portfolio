import { useEffect, useState } from "react";
import { Project } from "@/data/projects";
import { X, ExternalLink, Calendar, Code2, Briefcase, Tag } from "lucide-react";

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (project) {
      setActiveProject(project);
      // Small delay to ensure the DOM is ready before animating in
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      setIsVisible(false);
      // Wait for animation to finish before clearing project
      const timer = setTimeout(() => {
        setActiveProject(null);
        document.body.style.overflow = "";
      }, 300); // 300ms matches transition duration
      return () => clearTimeout(timer);
    }
  }, [project]);

  if (!activeProject) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none p-4 sm:p-8">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div 
        className={`relative w-full sm:max-w-4xl lg:max-w-5xl max-h-[90vh] sm:max-h-[85vh] bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl pointer-events-auto flex flex-col transition-all duration-300 ease-out ${isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-95 opacity-0'}`}
      >
        {/* Header */}
        <div className="flex-none p-4 flex justify-between items-center border-b border-white/10 relative">
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors ml-auto sm:mt-0 mt-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          
          {activeProject.image && (
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-8 shrink-0 relative group">
              <img 
                src={activeProject.image} 
                alt={activeProject.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          )}

          <h2 className="display-font text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
            {activeProject.title}
          </h2>
          <p className="text-white/60 text-lg mb-8">{activeProject.subtitle}</p>

          {/* Notion-style Properties */}
          <div className="space-y-4 mb-10 border-t border-b border-white/10 py-6">
            <div className="flex items-start gap-4 text-sm">
              <div className="w-28 md:w-32 text-white/40 flex items-center gap-2 shrink-0 pt-0.5">
                <Tag className="w-4 h-4" /> Category
              </div>
              <div className="text-white/90">
                <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/5 font-mono text-[11px] uppercase tracking-wider">
                  {activeProject.category}
                </span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 text-sm">
              <div className="w-28 md:w-32 text-white/40 flex items-center gap-2 shrink-0">
                <Briefcase className="w-4 h-4" /> Role
              </div>
              <div className="text-white/90">{activeProject.role}</div>
            </div>

            <div className="flex items-start gap-4 text-sm">
              <div className="w-28 md:w-32 text-white/40 flex items-center gap-2 shrink-0">
                <Calendar className="w-4 h-4" /> Year
              </div>
              <div className="text-white/90">{activeProject.year}</div>
            </div>

            <div className="flex items-start gap-4 text-sm">
              <div className="w-28 md:w-32 text-white/40 flex items-center gap-2 shrink-0 pt-1">
                <Code2 className="w-4 h-4" /> Stack
              </div>
              <div className="text-white/90 flex flex-wrap gap-1.5">
                {activeProject.stack.map(s => (
                  <span key={s} className="font-mono text-[11px] uppercase tracking-wider px-2 py-1 bg-white/5 border border-white/10 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-white mb-4">About this project</h3>
            <p className="text-white/70 leading-relaxed whitespace-pre-wrap text-[15px]">
              {activeProject.blurb}
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        {activeProject.link && (
          <div className="flex-none p-6 border-t border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md rounded-b-3xl">
            <a 
              href={activeProject.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              View Live Project <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
