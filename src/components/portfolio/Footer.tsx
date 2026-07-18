export function Footer() {
  return (
    <footer className="px-4 md:px-6 pb-10 pt-8">
      <div className="max-w-6xl mx-auto glass-strong rounded-full px-6 py-4 relative flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-white/45">
        <div className="flex gap-4">
          <a href="https://github.com/JericoGatpandan" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">github ↗</a>
          <a href="https://www.linkedin.com/in/jericogatpandan/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">linkedin ↗</a>
        </div>
        <div className="flex gap-4">
          <span>© {new Date().getFullYear()} Jerico Gatpandan - Built with care.</span>
        </div>
      </div>
    </footer>
  );
}
