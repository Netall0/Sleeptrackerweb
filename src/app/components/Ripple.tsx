import { useState, useRef } from "react";

interface RippleItem {
  id: number;
  x: number;
  y: number;
}

export function useRipple() {
  const [ripples, setRipples] = useState<RippleItem[]>([]);
  const rippleIdRef = useRef(0);

  const createRipple = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const newRipple: RippleItem = {
      id: rippleIdRef.current++,
      x,
      y,
    };
    
    setRipples((prev) => [...prev, newRipple]);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  const RippleContainer = () => (
    <span className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            transform: "translate(-50%, -50%)",
            animation: "ripple 600ms ease-out",
          }}
        />
      ))}
    </span>
  );

  return { createRipple, RippleContainer };
}
