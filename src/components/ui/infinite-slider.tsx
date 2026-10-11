import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type InfiniteSliderProps = {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  speed?: number;
  speedOnHover?: number;
  className?: string;
};

export function InfiniteSlider({
  children,
  direction = "horizontal",
  speed = 25,
  speedOnHover,
  className,
}: InfiniteSliderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Effective duration based on speed (higher speed = faster = lower duration)
  const currentSpeed = isHovered && speedOnHover ? speedOnHover : speed;
  const duration = Math.max(10, 800 / currentSpeed);

  const isVertical = direction === "vertical";

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "overflow-hidden relative flex select-none",
        isVertical ? "flex-col h-[550px]" : "flex-row w-full",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-6",
          isVertical ? "flex-col animate-infinite-scroll-y" : "flex-row animate-infinite-scroll-x"
        )}
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: "running",
        }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 gap-6",
          isVertical ? "flex-col animate-infinite-scroll-y" : "flex-row animate-infinite-scroll-x"
        )}
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: "running",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default InfiniteSlider;
