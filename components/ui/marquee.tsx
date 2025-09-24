import * as React from "react"
import { cn } from "../../lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (isMounted && contentRef.current && containerRef.current) {
      const contentWidth = contentRef.current.offsetWidth / 2;
      containerRef.current.style.setProperty('--duration', `${contentWidth / speed}s`);
    }
  }, [isMounted, speed]);
  

  return (
    <div 
      ref={containerRef}
      className={cn(
        "w-full overflow-hidden sm:mt-24 mt-10 z-10",
        className
      )} 
      {...props}
    >
      <div className="relative flex w-full overflow-hidden py-5">
        <div 
          ref={contentRef}
          className={cn(
            "flex w-max animate-marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse"
          )}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}