export function Footer() {
  return (
    <footer id="contact" className="px-4 md:px-6 pb-10 pt-8">
      <div className="max-w-6xl mx-auto glass-strong rounded-3xl p-6 md:p-12 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full"
          style={{ background: "#a855f7", filter: "blur(90px)", opacity: 0.28 }}
        />
        <div className="relative grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/50">
              05 — contact
            </p>
            <h2 className="mt-3 display-font text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
              Open to <span className="grad-text">collaborations</span>
              <br />
              & internships.
            </h2>
            <p className="mt-5 max-w-lg text-white/70 leading-relaxed">
              Have a project in mind, a hackathon team to fill, or a role I might fit?
              I&apos;m always happy to chat about full-stack builds, cooperative and
              civic tech, or AI-assisted tools.
            </p>
            <a
              href="mailto:jericogatpandan0905@gmail.com"
              className="inline-flex max-w-full mt-6 items-center gap-2 md:gap-3 glass glass-hover rounded-full px-4 md:px-5 py-3 text-xs md:text-sm font-mono text-white"
            >
              <span className="shrink-0 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="truncate">jericogatpandan0905@gmail.com</span>
            </a>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4 md:pl-6 md:border-l border-white/10 min-w-0">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                based in
              </p>
              <p className="mt-1 text-white/85 text-sm">
                Naga City, Philippines
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                phone
              </p>
              <p className="mt-1 text-white/85 text-sm">+63 991 251 1750</p>
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                elsewhere
              </p>
              <ul className="mt-2 space-y-1.5 text-sm min-w-0">
                <li className="min-w-0">
                  <a
                    href="https://www.linkedin.com/in/jericogatpandan/"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-white/85 hover:text-white transition-colors truncate"
                  >
                    linkedin.com/in/jericogatpandan ↗
                  </a>
                </li>
                <li className="min-w-0">
                  <a
                    href="https://github.com/JericoGatpandan"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-white/85 hover:text-white transition-colors truncate"
                  >
                    github.com/JericoGatpandan ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-white/45">
          <span>© {new Date().getFullYear()} Jerico Gatpandan — Built with care.</span>
          <span>crafted in Naga City</span>
        </div>
      </div>
    </footer>
  );
}
