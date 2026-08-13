import { useEffect, useState } from "react";
import { VirtualMouse } from "./VirtualMouse";

export function Background() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only track mouse on screens large enough to notice parallax
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white" aria-hidden="true">
      {/* Dot grid base */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #e0e0e0 2px, transparent 2px)',
          backgroundSize: '32px 32px',
          opacity: 0.7,
        }}
      />
      
      {/* Top right squiggly / polygon */}
      <div 
        className="absolute top-[15%] right-[5%] transition-transform duration-500 ease-out"
        style={{ transform: `translate(${mouse.x * -30}px, ${mouse.y * -30}px)` }}
      >
        <div 
          className="w-32 h-32 md:w-48 md:h-48 bg-[#FFD60A] border-[3px] border-black shadow-[6px_6px_0_#000] opacity-80" 
          style={{ 
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
            animation: 'spin 40s linear infinite'
          }} 
        />
      </div>

      {/* Left middle star/badge */}
      <div 
        className="absolute top-[40%] -left-8 md:left-[2%] transition-transform duration-500 ease-out"
        style={{ transform: `translate(${mouse.x * 40}px, ${mouse.y * 40}px)` }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 bg-white border-[3px] border-black shadow-[6px_6px_0_#000] -rotate-12 opacity-90 flex items-center justify-center hover:rotate-0 transition-transform cursor-default">
          <span className="font-mono text-4xl md:text-5xl font-black text-black">JG</span>
        </div>
      </div>

      {/* Bottom right accent block */}
      <div 
        className="absolute bottom-[10%] right-[-10px] md:right-[10%] transition-transform duration-500 ease-out"
        style={{ transform: `translate(${mouse.x * -20}px, ${mouse.y * -20}px)` }}
      >
        <div className="w-40 h-16 md:w-56 md:h-20 bg-black border-[3px] border-black shadow-[8px_8px_0_#FFD60A] -rotate-3 opacity-90 flex items-center justify-center hover:-rotate-1 transition-transform">
           <span className="font-mono text-white text-xs md:text-sm tracking-[0.3em] font-bold uppercase">v1.0.0</span>
        </div>
      </div>

      {/* Floating cross/plus */}
      <div 
        className="absolute top-[65%] left-[20%] transition-transform duration-500 ease-out"
        style={{ transform: `translate(${mouse.x * 60}px, ${mouse.y * 60}px)` }}
      >
        <div className="opacity-40 -rotate-12 hover:rotate-90 transition-transform duration-500 cursor-default">
           <div className="w-16 h-4 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
           <div className="w-4 h-16 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      
      {/* Easter Egg Virtual Mouse */}
      <VirtualMouse />
    </div>
  );
}
