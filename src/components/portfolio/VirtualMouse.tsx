import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { MousePointer2 } from "lucide-react";

export function VirtualMouse() {
  const [isAngry, setIsAngry] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const state = useRef({
    targetX: window.innerWidth / 2,
    targetY: window.innerHeight / 2,
    vx: 0,
    vy: 0,
    isRunningAway: false,
  });

  useEffect(() => {
    // Initial position
    x.set(window.innerWidth / 2);
    y.set(window.innerHeight / 2);

    const pickNewTarget = () => {
      if (isAngry) return; // Don't pick casually if it's currently angry/frozen
      // Pick random spot on screen
      state.current.targetX = 50 + Math.random() * (window.innerWidth - 100);
      state.current.targetY = 50 + Math.random() * (window.innerHeight - 100);
    };

    // Change target every 2 seconds
    const interval = setInterval(pickNewTarget, 2000);
    return () => clearInterval(interval);
  }, [isAngry, x, y]);

  useAnimationFrame((time) => {
    const s = state.current;
    
    // If it's angry and NOT running away yet, freeze in place to shake
    if (isAngry && !s.isRunningAway) {
      s.vx *= 0.8;
      s.vy *= 0.8;
      x.set(x.get() + s.vx);
      y.set(y.get() + s.vy);
      return; 
    }

    const currentX = x.get();
    const currentY = y.get();

    // Direction to target
    const dx = s.targetX - currentX;
    const dy = s.targetY - currentY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 2) {
      const perpX = -dy / (dist || 1);
      const perpY = dx / (dist || 1);
      
      // Combine multiple sine waves for a less predictable curve
      const wobble = Math.sin(time / 400) * 12 + Math.cos(time / 250) * 8; 

      // If running away, speed is massively increased and wobble is erratic
      const speedMult = s.isRunningAway ? 0.005 : 0.0008;
      const wobbleMult = s.isRunningAway ? 0.1 : 0.03;

      s.vx += (dx * speedMult) + (perpX * wobble * wobbleMult);
      s.vy += (dy * speedMult) + (perpY * wobble * wobbleMult);
    }

    // Friction
    s.vx *= 0.93;
    s.vy *= 0.93;

    // Apply velocity
    x.set(currentX + s.vx);
    y.set(currentY + s.vy);
  });

  const handleClick = () => {
    if (isAngry) return;
    
    setIsAngry(true);
    state.current.isRunningAway = false;

    // Phase 1: Freeze and be angry for 1 second
    setTimeout(() => {
      // Phase 2: Run away to a far corner!
      state.current.isRunningAway = true;
      state.current.targetX = Math.random() > 0.5 ? 50 : window.innerWidth - 50;
      state.current.targetY = Math.random() > 0.5 ? 50 : window.innerHeight - 50;
      
      // Phase 3: Calm down after it ran away
      setTimeout(() => {
        setIsAngry(false);
        state.current.isRunningAway = false;
      }, 1500);
    }, 1000);
  };

  return (
    <motion.div
      className="fixed z-[100] cursor-pointer"
      style={{ x, y }}
      animate={{ 
        // Quick shake when angry but not running
        rotate: isAngry && !state.current.isRunningAway ? [0, -20, 20, -20, 20, 0] : 0,
        scale: isAngry ? 1.5 : 1
      }}
      transition={{ 
        type: "spring", 
        damping: 10, 
        stiffness: 300 
      }}
      onClick={handleClick}
    >
      <div className="relative group flex items-center justify-center">
        {/* The Angry Emoji or Normal Cursor */}
        {isAngry ? (
          <span className="text-4xl drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">😡</span>
        ) : (
          <MousePointer2 
            size={28} 
            className="fill-black text-black drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] transition-colors hover:fill-[#FFD60A]" 
          />
        )}

        {/* Angry Speech bubble */}
        {isAngry && !state.current.isRunningAway && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute -top-12 -right-16 bg-black text-white text-xs font-bold font-mono px-3 py-1 border-2 border-black shadow-[4px_4px_0_#FFD60A] whitespace-nowrap"
          >
            Don't touch! 💢
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
