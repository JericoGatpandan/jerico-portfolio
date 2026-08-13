const links = [
  { href: '/#top', label: 'home' },
  { href: '/#expertise', label: 'expertise' },
  { href: '/#work', label: 'work' },
  { href: '/#experience', label: 'experience' },
  { href: '/#contact', label: 'contact' },
];

export function Nav() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1080px,calc(100%-2rem))]">
      <nav className="neo-card bg-white px-5 py-3 flex items-center justify-between font-mono text-[13px]">
        <a href="/#top" className="text-black tracking-tight font-bold">
          JericoG<span className="text-black/40">._</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-black/60">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-2 py-1 hover:bg-[#FFD60A] hover:text-black transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/JericoGatpandan"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1.5 neo-card neo-card-hover bg-[#FFD60A] text-black font-bold hidden md:block"
          >
            github ↗
          </a>
          <a
            href="https://www.linkedin.com/in/jerico-gatpandan-4b24a7322"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1.5 neo-card neo-card-hover bg-white text-black font-bold hidden md:block"
          >
            linkedin ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
