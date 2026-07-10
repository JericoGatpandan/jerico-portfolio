import { useEffect, useRef } from "react";

export function Background() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="ambient-bg" aria-hidden="true" ref={containerRef}>
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      
      {/* Interactive grid spotlight */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)",
        }}
      />
      
      {/* Soft interactive glow */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6, 182, 212, 0.12), transparent 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
